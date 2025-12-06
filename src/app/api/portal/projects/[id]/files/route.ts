import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedClient } from '@/lib/portal/auth';
import { getProject, addProjectFile, getProjectFilesDir, initPortalStorage } from '@/lib/portal/storage';
import { writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

// 📤 UPLOAD FILE - Client uploads a file
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await initPortalStorage();

    const { id: projectId } = await params;

    // Require authentication
    const auth = await getAuthenticatedClient();
    if (!auth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { client } = auth;

    // Verify project ownership
    const project = await getProject(projectId);
    if (!project || project.clientId !== client.id) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Get form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = (formData.get('category') as string) || 'feedback';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 50MB' },
        { status: 400 }
      );
    }

    // Get file buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const fileExt = path.extname(file.name);
    const fileHash = crypto.randomBytes(16).toString('hex');
    const fileName = `${fileHash}${fileExt}`;

    // Get project files directory
    const filesDir = await getProjectFilesDir(projectId);
    const filePath = path.join(filesDir, fileName);

    // Save file (Buffer is compatible with writeFile in runtime)
    await writeFile(filePath, buffer as unknown as Uint8Array);

    // Add file metadata to project
    const projectFile = await addProjectFile(projectId, {
      projectId,
      fileName,
      originalName: file.name,
      fileSize: file.size,
      fileType: file.type,
      uploadedBy: 'client',
      category: category as any,
      filePath: path.join(projectId, fileName),
    });

    if (!projectFile) {
      return NextResponse.json(
        { error: 'Failed to save file metadata' },
        { status: 500 }
      );
    }

    console.log(`✅ File uploaded: ${file.name} → ${project.title} by ${client.name}`);

    return NextResponse.json({ success: true, file: projectFile });
  } catch (error) {
    console.error('❌ Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
