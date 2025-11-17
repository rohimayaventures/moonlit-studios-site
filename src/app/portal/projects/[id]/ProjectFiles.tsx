'use client';

import { useState } from 'react';
import type { ProjectFile } from '@/lib/portal/types';

interface ProjectFilesProps {
  projectId: string;
  initialFiles: ProjectFile[];
}

export default function ProjectFiles({
  projectId,
  initialFiles,
}: ProjectFilesProps) {
  const [files, setFiles] = useState<ProjectFile[]>(initialFiles);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Max file size: 50MB
    if (file.size > 50 * 1024 * 1024) {
      alert('File size must be less than 50MB');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', 'feedback'); // Client uploads are always feedback

      const res = await fetch(`/api/portal/projects/${projectId}/files`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setFiles([...files, data.file]);
      } else {
        alert('Failed to upload file. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setUploading(false);
      // Reset input
      e.target.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getCategoryLabel = (category?: string) => {
    switch (category) {
      case 'deliverable':
        return '📦 Deliverable';
      case 'asset':
        return '🎨 Asset';
      case 'feedback':
        return '💬 Feedback';
      case 'contract':
        return '📄 Contract';
      default:
        return '📁 File';
    }
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'deliverable':
        return 'text-green-400';
      case 'asset':
        return 'text-purple-400';
      case 'feedback':
        return 'text-yellow-400';
      case 'contract':
        return 'text-blue-400';
      default:
        return 'text-moonlightSilver';
    }
  };

  return (
    <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-moonlightSilver/10 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-moonlightSilver">Files</h3>
          <p className="text-sm text-moonlightSilver/70 mt-1">
            {files.length} {files.length === 1 ? 'file' : 'files'}
          </p>
        </div>
        <label className="cursor-pointer">
          <input
            type="file"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
          <span className="px-4 py-2 bg-lunarGold/20 border border-lunarGold/30 text-lunarGold rounded-lg text-sm font-medium hover:bg-lunarGold/30 transition-colors inline-block">
            {uploading ? 'Uploading...' : '+ Upload File'}
          </span>
        </label>
      </div>

      {/* Files List */}
      <div className="px-6 py-4">
        {files.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-moonlightSilver/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-moonlightSilver/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-moonlightSilver/70">No files yet</p>
            <p className="text-sm text-moonlightSilver/60 mt-2">
              Files will appear here as the project progresses
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {files
              .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
              .map((file) => (
                <div
                  key={file.id}
                  className="flex items-start justify-between gap-4 p-4 bg-midnight/30 border border-moonlightSilver/10 rounded-lg hover:border-moonlightSilver/20 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${getCategoryColor(file.category)}`}>
                        {getCategoryLabel(file.category)}
                      </span>
                      {file.uploadedBy === 'client' && (
                        <span className="px-2 py-0.5 bg-lunarGold/20 text-lunarGold rounded text-xs">
                          Your Upload
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-moonlightSilver truncate">
                      {file.originalName}
                    </p>
                    {file.description && (
                      <p className="text-xs text-moonlightSilver/70 mt-1">
                        {file.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-2 text-xs text-moonlightSilver/60">
                      <span>{formatFileSize(file.fileSize)}</span>
                      <span>•</span>
                      <span>{new Date(file.uploadedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <a
                    href={`/api/portal/projects/${projectId}/files/${file.id}`}
                    download={file.originalName}
                    className="flex-shrink-0 px-3 py-2 bg-starlight/20 border border-starlight/30 text-starlight rounded-lg text-sm font-medium hover:bg-starlight/30 transition-colors"
                  >
                    Download
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
