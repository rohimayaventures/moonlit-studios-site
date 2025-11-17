import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { getAuthenticatedClient } from '@/lib/portal/auth';
import { getProject, getProjectMessages } from '@/lib/portal/storage';
import ProjectMessaging from './ProjectMessaging';
import ProjectFiles from './ProjectFiles';
import type { Project } from '@/lib/portal/types';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Require authentication
  const auth = await getAuthenticatedClient();
  if (!auth) {
    redirect('/portal/login');
  }

  const { client } = auth;

  // Get project
  const project = await getProject(id);
  if (!project) {
    notFound();
  }

  // Verify client owns this project
  if (project.clientId !== client.id) {
    redirect('/portal/dashboard');
  }

  // Get messages
  const messages = await getProjectMessages(id);

  // Status badge styles
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'not_started':
        return 'bg-moonlightSilver/20 text-moonlightSilver';
      case 'in_progress':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      case 'review':
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      case 'completed':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'on_hold':
        return 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getMilestoneIcon = (status: string) => {
    if (status === 'completed') return '✅';
    if (status === 'in_progress') return '🔄';
    return '⏳';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight">
      {/* Header */}
      <header className="bg-deepOcean/30 backdrop-blur-sm border-b border-moonlightSilver/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/portal/dashboard"
                className="text-moonlightSilver/70 hover:text-moonlightSilver transition-colors"
              >
                ← Back
              </Link>
              <span className="text-moonlightSilver/40">|</span>
              <h1 className="text-xl font-bold text-lunarGold">Project Details</h1>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {getStatusLabel(project.status)}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-moonlightSilver mb-2">{project.title}</h2>
          <p className="text-moonlightSilver/70 mb-4">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {project.packageName && (
              <div>
                <p className="text-xs text-moonlightSilver/60 mb-1">Package</p>
                <p className="text-sm font-medium text-lunarGold">{project.packageName}</p>
              </div>
            )}
            <div>
              <p className="text-xs text-moonlightSilver/60 mb-1">Started</p>
              <p className="text-sm font-medium text-moonlightSilver">
                {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
            {project.estimatedCompletion && (
              <div>
                <p className="text-xs text-moonlightSilver/60 mb-1">Est. Completion</p>
                <p className="text-sm font-medium text-starlight">
                  {new Date(project.estimatedCompletion).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Milestones & Files */}
          <div className="lg:col-span-2 space-y-8">
            {/* Milestones */}
            {project.milestones.length > 0 && (
              <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-moonlightSilver/10">
                  <h3 className="text-xl font-semibold text-moonlightSilver">Milestones</h3>
                  <p className="text-sm text-moonlightSilver/70 mt-1">
                    {project.milestones.filter(m => m.status === 'completed').length} of {project.milestones.length} completed
                  </p>
                </div>
                <div className="px-6 py-4 space-y-4">
                  {project.milestones
                    .sort((a, b) => a.order - b.order)
                    .map((milestone, index) => (
                      <div
                        key={milestone.id}
                        className={`flex items-start gap-4 pb-4 ${
                          index < project.milestones.length - 1 ? 'border-b border-moonlightSilver/10' : ''
                        }`}
                      >
                        <div className="text-2xl">{getMilestoneIcon(milestone.status)}</div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${
                            milestone.status === 'completed' ? 'text-green-400' : 'text-moonlightSilver'
                          }`}>
                            {milestone.title}
                          </h4>
                          {milestone.description && (
                            <p className="text-sm text-moonlightSilver/70 mt-1">
                              {milestone.description}
                            </p>
                          )}
                          {milestone.dueDate && (
                            <p className="text-xs text-moonlightSilver/60 mt-2">
                              Due: {new Date(milestone.dueDate).toLocaleDateString()}
                            </p>
                          )}
                          {milestone.completedAt && (
                            <p className="text-xs text-green-400/70 mt-1">
                              ✓ Completed {new Date(milestone.completedAt).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Files */}
            <ProjectFiles projectId={project.id} initialFiles={project.files} />
          </div>

          {/* Right Column - Messaging */}
          <div className="lg:col-span-1">
            <ProjectMessaging
              projectId={project.id}
              initialMessages={messages}
              clientName={client.name}
              clientEmail={client.email}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
