import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getAuthenticatedClient } from '@/lib/portal/auth';
import { getClientProjects, getProjectMessages } from '@/lib/portal/storage';
import type { Project } from '@/lib/portal/types';

export default async function PortalDashboardPage() {
  // Require authentication
  const auth = await getAuthenticatedClient();
  if (!auth) {
    redirect('/portal/login');
  }

  const { client } = auth;

  // Get all projects for this client
  const projects = await getClientProjects(client.id);

  // Calculate stats
  const activeProjects = projects.filter(p => p.status === 'in_progress' || p.status === 'review');
  const completedProjects = projects.filter(p => p.status === 'completed');

  // Get unread message count
  let unreadCount = 0;
  for (const project of projects) {
    const messages = await getProjectMessages(project.id);
    unreadCount += messages.filter(m => !m.read && m.from === 'admin').length;
  }

  // Status badge styles
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'not_started':
        return 'bg-moonlightSilver/20 text-moonlightSilver';
      case 'in_progress':
        return 'bg-blue-500/20 text-blue-400';
      case 'review':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'on_hold':
        return 'bg-orange-500/20 text-orange-400';
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight">
      {/* Header */}
      <header className="bg-deepOcean/30 backdrop-blur-sm border-b border-moonlightSilver/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-lunarGold">🌙 Client Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-moonlightSilver/70 text-sm hidden sm:block">
                {client.name}
              </span>
              <form action="/api/portal/auth/logout" method="POST">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-moonlightSilver/70 hover:text-moonlightSilver transition-colors"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-moonlightSilver mb-2">
            Welcome back, {client.name.split(' ')[0]}! 👋
          </h2>
          <p className="text-moonlightSilver/70">
            Here's what's happening with your projects
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-moonlightSilver/70 text-sm mb-1">Total Projects</p>
                <p className="text-3xl font-bold text-lunarGold">{projects.length}</p>
              </div>
              <div className="w-12 h-12 bg-lunarGold/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-lunarGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-moonlightSilver/70 text-sm mb-1">Active Projects</p>
                <p className="text-3xl font-bold text-starlight">{activeProjects.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-moonlightSilver/70 text-sm mb-1">New Messages</p>
                <p className="text-3xl font-bold text-green-400">{unreadCount}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-moonlightSilver/10">
            <h3 className="text-xl font-semibold text-moonlightSilver">Your Projects</h3>
          </div>

          {projects.length === 0 ? (
            // Empty State
            <div className="px-6 py-12 text-center">
              <div className="w-16 h-16 mx-auto bg-moonlightSilver/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-moonlightSilver/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-moonlightSilver/70 mb-4">No projects yet</p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all"
              >
                Start a New Project
              </Link>
            </div>
          ) : (
            // Projects List
            <div className="divide-y divide-moonlightSilver/10">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portal/projects/${project.id}`}
                  className="block px-6 py-4 hover:bg-starlight/5 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-moonlightSilver mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm text-moonlightSilver/70 mb-2">
                        {project.description}
                      </p>
                      {project.packageName && (
                        <p className="text-xs text-lunarGold/80">
                          📦 {project.packageName}
                        </p>
                      )}
                    </div>
                    <span className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {project.milestones.length > 0 && (
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs text-moonlightSilver/60 mb-1">
                        <span>Progress</span>
                        <span>
                          {project.milestones.filter(m => m.status === 'completed').length}/{project.milestones.length} milestones
                        </span>
                      </div>
                      <div className="w-full bg-midnight/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-lunarGold to-starlight h-2 rounded-full transition-all"
                          style={{
                            width: `${(project.milestones.filter(m => m.status === 'completed').length / project.milestones.length) * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-moonlightSilver/60">
                    <span>Created {new Date(project.createdAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
                    {project.files.length > 0 && (
                      <>
                        <span>•</span>
                        <span>📁 {project.files.length} files</span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/contact"
            className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-6 hover:border-lunarGold/40 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-lunarGold/20 rounded-full flex items-center justify-center group-hover:bg-lunarGold/30 transition-colors">
                <svg className="w-6 h-6 text-lunarGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-moonlightSilver">Start New Project</h4>
                <p className="text-sm text-moonlightSilver/70">Get a quote and begin</p>
              </div>
            </div>
          </Link>

          <Link
            href="mailto:hello@moonlitstudios.com"
            className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-6 hover:border-starlight/40 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-starlight/20 rounded-full flex items-center justify-center group-hover:bg-starlight/30 transition-colors">
                <svg className="w-6 h-6 text-starlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-moonlightSilver">Contact Support</h4>
                <p className="text-sm text-moonlightSilver/70">We're here to help</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
