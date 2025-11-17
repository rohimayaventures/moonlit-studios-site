import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedClient } from '@/lib/portal/auth';
import { getProject, getProjectFilesDir } from '@/lib/portal/storage';
import { readFile } from 'fs/promises';
import path from 'path';

// 📥 DOWNLOAD FILE - Client downloads a file
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; fileId: string }> }
) {
  try {
    const { id: projectId, fileId } = await params;

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

    // Find file in project
    const file = project.files.find(f => f.id === fileId);
    if (!file) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    // Get file path
    const filesDir = await getProjectFilesDir(projectId);
    const filePath = path.join(filesDir, file.fileName);

    // Read file
    const fileBuffer = await readFile(filePath);

    // Return file with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': file.fileType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${file.originalName}"`,
        'Content-Length': file.fileSize.toString(),
      },
    });
  } catch (error) {
    console.error('❌ Error downloading file:', error);
    return NextResponse.json(
      { error: 'Failed to download file' },
      { status: 500 }
    );
  }
}
