import Link from 'next/link';
import { getAllClients, getAllProjects } from '@/lib/portal/storage';

export const dynamic = 'force-dynamic';

export default async function AdminPortalPage() {
  const clients = await getAllClients();
  const projects = await getAllProjects();

  const activeProjects = projects.filter(p => p.status === 'in_progress' || p.status === 'review');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-lunarGold mb-2">Client Portal Management</h1>
        <p className="text-moonlightSilver/70">
          Manage clients, projects, files, and messages
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-deepOcean/50 border border-moonlightSilver/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-moonlightSilver/70 text-sm mb-1">Total Clients</p>
              <p className="text-3xl font-bold text-lunarGold">{clients.length}</p>
            </div>
            <div className="w-12 h-12 bg-lunarGold/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-lunarGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-deepOcean/50 border border-moonlightSilver/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-moonlightSilver/70 text-sm mb-1">Total Projects</p>
              <p className="text-3xl font-bold text-starlight">{projects.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-deepOcean/50 border border-moonlightSilver/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-moonlightSilver/70 text-sm mb-1">Active Projects</p>
              <p className="text-3xl font-bold text-green-400">{activeProjects.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/portal/clients/new"
          className="bg-deepOcean/50 border border-moonlightSilver/20 rounded-lg p-6 hover:border-lunarGold/40 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-lunarGold/20 rounded-full flex items-center justify-center group-hover:bg-lunarGold/30 transition-colors">
              <svg className="w-6 h-6 text-lunarGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-moonlightSilver">Add New Client</h3>
              <p className="text-sm text-moonlightSilver/70">Create a client account</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/portal/projects/new"
          className="bg-deepOcean/50 border border-moonlightSilver/20 rounded-lg p-6 hover:border-starlight/40 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-starlight/20 rounded-full flex items-center justify-center group-hover:bg-starlight/30 transition-colors">
              <svg className="w-6 h-6 text-starlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-moonlightSilver">Create New Project</h3>
              <p className="text-sm text-moonlightSilver/70">Start a new client project</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Clients */}
      <div className="bg-deepOcean/50 border border-moonlightSilver/20 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-moonlightSilver/10 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-moonlightSilver">Recent Clients</h3>
          <Link
            href="/admin/portal/clients"
            className="text-sm text-starlight hover:text-lunarGold transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="divide-y divide-moonlightSilver/10">
          {clients.slice(0, 5).map((client) => {
            const clientProjects = projects.filter(p => p.clientId === client.id);
            return (
              <Link
                key={client.id}
                href={`/admin/portal/clients/${client.id}`}
                className="block px-6 py-4 hover:bg-starlight/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-moonlightSilver">{client.name}</h4>
                    <p className="text-sm text-moonlightSilver/70">{client.email}</p>
                    {client.company && (
                      <p className="text-xs text-moonlightSilver/60 mt-1">{client.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-moonlightSilver/70">
                      {clientProjects.length} {clientProjects.length === 1 ? 'project' : 'projects'}
                    </p>
                    <p className="text-xs text-moonlightSilver/60">
                      Joined {new Date(client.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-deepOcean/50 border border-moonlightSilver/20 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-moonlightSilver/10 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-moonlightSilver">Recent Projects</h3>
          <Link
            href="/admin/portal/projects"
            className="text-sm text-starlight hover:text-lunarGold transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="divide-y divide-moonlightSilver/10">
          {projects.slice(0, 5).map((project) => {
            const client = clients.find(c => c.id === project.clientId);
            const getStatusColor = (status: string) => {
              switch (status) {
                case 'not_started': return 'bg-moonlightSilver/20 text-moonlightSilver';
                case 'in_progress': return 'bg-blue-500/20 text-blue-400';
                case 'review': return 'bg-yellow-500/20 text-yellow-400';
                case 'completed': return 'bg-green-500/20 text-green-400';
                case 'on_hold': return 'bg-orange-500/20 text-orange-400';
                default: return 'bg-moonlightSilver/20 text-moonlightSilver';
              }
            };
            return (
              <Link
                key={project.id}
                href={`/admin/portal/projects/${project.id}`}
                className="block px-6 py-4 hover:bg-starlight/5 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-moonlightSilver">{project.title}</h4>
                    <p className="text-sm text-moonlightSilver/70 mt-1">{project.description}</p>
                    {client && (
                      <p className="text-xs text-moonlightSilver/60 mt-2">Client: {client.name}</p>
                    )}
                  </div>
                  <span className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.replace('_', ' ')}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
