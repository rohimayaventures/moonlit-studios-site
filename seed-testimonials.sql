-- ========================================
-- MOONLIT STUDIOS - SEED TESTIMONIALS
-- ========================================
-- 3 believable testimonials showcasing different service suites
-- Run this in Supabase SQL Editor AFTER running supabase-setup.sql
-- These are placeholder testimonials that can be replaced with real client feedback
-- ========================================

-- Delete existing sample testimonials (optional - only if you want to start fresh)
-- DELETE FROM testimonials WHERE email IN ('sarah@healthtech.com', 'marcus@financeapp.io', 'emily@startup.co');

-- Insert 3 new believable testimonials

-- TESTIMONIAL 1: HealthTech AI System (Earth Bending - Grounded, Solid Systems)
INSERT INTO testimonials (
  name,
  email,
  company,
  role,
  rating,
  content,
  project_type,
  approved,
  featured
) VALUES (
  'Dr. Jennifer Park',
  'jpark@riverbendclinic.com',
  'Riverbend Family Medicine',
  'Medical Director',
  5,
  'As a physician with zero technical background, I was nervous about implementing AI into our practice. The VisionScan PDF analysis system has transformed how we process patient intake forms and lab results. What used to take our staff 3-4 hours daily now happens in minutes with incredible accuracy. The team understood healthcare workflows from day one—clearly someone has clinical experience. Game-changer for our small practice.',
  'Healthcare AI - VisionScan',
  true,
  true
);

-- TESTIMONIAL 2: Creative Brand Design + Web Development (Water Bending - Flow, Adaptability)
INSERT INTO testimonials (
  name,
  email,
  company,
  role,
  rating,
  content,
  project_type,
  approved,
  featured
) VALUES (
  'Marcus Thompson',
  'marcus@zenithwellness.io',
  'Zenith Wellness Collective',
  'Founder & CEO',
  5,
  'We hired Moonlit Studios to rebrand our wellness startup and build our patient portal from scratch. The design work was stunning—they captured the exact vibe we wanted, professional but approachable. The web app they built integrates seamlessly with our scheduling system and the UI is so intuitive that our older clients navigate it without help. Best investment we made this year. Highly recommend for health + wellness companies.',
  'Creative Suite - Brand + Web',
  true,
  true
);

-- TESTIMONIAL 3: AI Chatbot for Customer Support (Fire Bending - Transformation, Power)
INSERT INTO testimonials (
  name,
  email,
  company,
  role,
  rating,
  content,
  project_type,
  approved,
  featured
) VALUES (
  'Rachel Nguyen',
  'rachel@cardiocaresolutions.com',
  'CardioCare Solutions',
  'VP of Operations',
  5,
  'The Echo chatbot they deployed for us has been a revelation. We were drowning in repetitive insurance and billing questions—our front desk was overwhelmed. Now Echo handles 70% of common inquiries 24/7 with responses that actually make sense. It is trained on our specific protocols, so answers are accurate and compliant. Our staff can focus on complex cases that need human attention. ROI was immediate.',
  'AI Suite - Echo Chatbot',
  true,
  true
);

-- ========================================
-- VERIFICATION
-- ========================================
-- Run this query to verify the testimonials were inserted:
-- SELECT name, company, project_type, rating, approved, featured FROM testimonials ORDER BY created_at DESC LIMIT 3;
-- ========================================
