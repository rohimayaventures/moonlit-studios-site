import { createClient } from '@supabase/supabase-js';

// Supabase client for browser/client-side operations
// Uses anon key - protected by Row Level Security (RLS)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Supabase admin client for server-side operations
// Uses service key - bypasses RLS (use with caution!)
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Database types for TypeScript autocompletion
export type Testimonial = {
  id: string;
  created_at: string;
  name: string;
  company: string | null;
  role: string | null;
  rating: number;
  content: string;
  project_type: string | null;
  email: string | null;
  approved: boolean;
  featured: boolean;
};

export type Quote = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  project_type: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[] | null;
  ai_generated_quote: string | null;
  estimated_cost: number | null;
  estimated_timeline: string | null;
  status: 'new' | 'reviewed' | 'quoted' | 'accepted' | 'rejected';
  notes: string | null;
};

export type Lead = {
  id: string;
  created_at: string;
  source: 'contact_form' | 'quote_request' | 'consultation_booking' | 'testimonial' | 'ai_lab';
  name: string;
  email: string;
  company: string | null;
  message: string | null;
  metadata: Record<string, any> | null;
  notion_page_id: string | null;
  slack_notified_at: string | null;
};
