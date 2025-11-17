'use client';

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      return;
    }

    if (data.session) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <div className="text-moonlightSilver">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-lunarGold mb-2">Admin Portal</h1>
            <p className="text-moonlightSilver/70">Sign in to access admin features</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-moonlightSilver mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-midnight border border-moonlightSilver/20 rounded-lg text-moonlightSilver focus:outline-none focus:border-lunarGold"
                placeholder="hello@moonlitstudios.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-moonlightSilver mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-midnight border border-moonlightSilver/20 rounded-lg text-moonlightSilver focus:outline-none focus:border-lunarGold"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-moonlightSilver/60 text-sm">
              First time? Create your admin account in Supabase Dashboard.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight">
      {/* Admin Header */}
      <div className="bg-deepOcean/50 border-b border-moonlightSilver/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-lunarGold">Admin Portal</h1>
            <p className="text-sm text-moonlightSilver/60">Moonlit Studios</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-midnight border border-moonlightSilver/20 text-moonlightSilver rounded-lg hover:border-lunarGold/40 transition-all text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Admin Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </div>
    </div>
  );
}
