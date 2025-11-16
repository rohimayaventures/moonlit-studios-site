-- ========================================
-- MOONLIT STUDIOS - SUPABASE DATABASE SETUP
-- ========================================
-- Run this SQL in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/fodwyrrkdyrqtxobfcxm/sql
-- ========================================

-- ========================================
-- 1. TESTIMONIALS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Contact info
  name TEXT NOT NULL,
  email TEXT,
  company TEXT,
  role TEXT,

  -- Testimonial content
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  project_type TEXT,

  -- Admin controls
  approved BOOLEAN DEFAULT false NOT NULL,
  featured BOOLEAN DEFAULT false NOT NULL
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);

-- ========================================
-- 2. QUOTES TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Contact info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,

  -- Project details
  project_type TEXT NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  description TEXT NOT NULL,
  features JSONB,

  -- AI-generated quote
  ai_generated_quote TEXT,
  estimated_cost NUMERIC,
  estimated_timeline TEXT,

  -- Status tracking
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'quoted', 'accepted', 'rejected')),
  notes TEXT
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_quotes_status ON quotes(status);
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_email ON quotes(email);

-- ========================================
-- 3. LEADS TABLE (For Notion Sync)
-- ========================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Lead source
  source TEXT NOT NULL CHECK (source IN ('contact_form', 'quote_request', 'consultation_booking', 'testimonial', 'ai_lab')),

  -- Contact info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,

  -- Metadata (flexible JSON for different lead types)
  metadata JSONB,

  -- Integration tracking
  notion_page_id TEXT,
  slack_notified_at TIMESTAMPTZ
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_notion_page_id ON leads(notion_page_id);

-- ========================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ========================================

-- Enable RLS on all tables
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- TESTIMONIALS POLICIES
-- Public can insert testimonials (for submission form)
CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT
  WITH CHECK (true);

-- Public can read approved testimonials only
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  USING (approved = true);

-- Service role can do anything (for admin panel)
CREATE POLICY "Service role can manage all testimonials"
  ON testimonials FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- QUOTES POLICIES
-- Public can insert quotes (for quote request form)
CREATE POLICY "Anyone can submit quotes"
  ON quotes FOR INSERT
  WITH CHECK (true);

-- Only service role can read quotes (admin only)
CREATE POLICY "Service role can manage all quotes"
  ON quotes FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- LEADS POLICIES
-- Public can insert leads (for contact forms)
CREATE POLICY "Anyone can submit leads"
  ON leads FOR INSERT
  WITH CHECK (true);

-- Only service role can read leads (admin only)
CREATE POLICY "Service role can manage all leads"
  ON leads FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- ========================================
-- 5. SAMPLE DATA (Optional - for testing)
-- ========================================

-- Insert sample approved testimonials
INSERT INTO testimonials (name, email, company, role, rating, content, project_type, approved, featured) VALUES
('Sarah Chen', 'sarah@healthtech.com', 'HealthTech Solutions', 'CTO', 5, 'Moonlit Studios delivered an exceptional AI-powered patient intake system. The attention to detail and technical expertise was outstanding.', 'Healthcare AI', true, true),
('Marcus Rodriguez', 'marcus@financeapp.io', 'FinanceApp', 'Product Manager', 5, 'They built our entire analytics dashboard with beautiful visualizations. Exceeded expectations on both design and functionality.', 'Web App', true, true),
('Emily Watson', 'emily@startup.co', 'Startup Co', 'Founder', 4, 'Great communication throughout the project. They understood our vision and brought it to life with clean, maintainable code.', 'SaaS Platform', true, false);

-- ========================================
-- SETUP COMPLETE!
-- ========================================
-- Next steps:
-- 1. Copy this entire SQL script
-- 2. Go to https://supabase.com/dashboard/project/fodwyrrkdyrqtxobfcxm/sql
-- 3. Paste and run it
-- 4. Verify tables were created in the Table Editor
-- 5. Test the API routes in your Next.js app
-- ========================================
