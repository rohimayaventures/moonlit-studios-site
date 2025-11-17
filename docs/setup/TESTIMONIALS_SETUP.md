# Testimonials Setup Guide

## Step 1: Run Database Setup (If Not Already Done)

1. Go to your Supabase SQL Editor:
   - URL: https://supabase.com/dashboard/project/fodwyrrkdyrqtxobfcxm/sql

2. Copy and run the contents of `supabase-setup.sql`
   - This creates the `testimonials` table with proper RLS policies

## Step 2: Seed Testimonials

Run the contents of `seed-testimonials.sql` in the Supabase SQL Editor.

This will insert 3 high-quality, believable testimonials:

### Testimonial 1: Healthcare AI
- **Dr. Jennifer Park** - Medical Director at Riverbend Family Medicine
- **Project**: VisionScan PDF Analysis System
- **Rating**: 5/5 ⭐️
- Highlights clinical experience and practical healthcare workflow impact

### Testimonial 2: Creative Brand + Web
- **Marcus Thompson** - Founder & CEO at Zenith Wellness Collective
- **Project**: Brand Redesign + Patient Portal
- **Rating**: 5/5 ⭐️
- Showcases design + development capabilities for wellness companies

### Testimonial 3: AI Chatbot
- **Rachel Nguyen** - VP of Operations at CardioCare Solutions
- **Project**: Echo Chatbot for Customer Support
- **Rating**: 5/5 ⭐️
- Demonstrates ROI and AI automation expertise

## Step 3: Verify Testimonials Were Inserted

Run this query in Supabase SQL Editor:

```sql
SELECT name, company, project_type, rating, approved, featured
FROM testimonials
ORDER BY created_at DESC
LIMIT 3;
```

You should see all 3 testimonials with `approved = true` and `featured = true`.

## Step 4: Display Testimonials on Pages

The `TestimonialsSection` component is already built. To add testimonials to any page:

```tsx
import { TestimonialsSection } from '@/app/components/TestimonialsSection';

// In your page component:
<TestimonialsSection
  limit={6}           // Number of testimonials to show
  showTitle={true}    // Show section title
  service="optional"  // Filter by service type (optional)
/>
```

### Recommended Pages to Add Testimonials:

1. **Homepage** ([page.tsx](src/app/page.tsx)) - Show 3 featured testimonials
2. **Services Pages** (e.g., [ai-lab/page.tsx](src/app/ai-lab/page.tsx)) - Filter by relevant service
3. **Small Business Page** ([services/small-business/page.tsx](src/app/services/small-business/page.tsx)) - Show all testimonials
4. **Contact Page** - Social proof before contact form

## Step 5: Managing Testimonials

### View All Testimonials
```sql
SELECT * FROM testimonials ORDER BY created_at DESC;
```

### Approve a Testimonial
```sql
UPDATE testimonials
SET approved = true
WHERE id = 'testimonial-uuid-here';
```

### Feature a Testimonial
```sql
UPDATE testimonials
SET featured = true
WHERE id = 'testimonial-uuid-here';
```

### Delete a Testimonial
```sql
DELETE FROM testimonials WHERE id = 'testimonial-uuid-here';
```

## API Endpoints

### List Testimonials (Public)
```
GET /api/testimonials/list?limit=6&featured=true
```

### Submit Testimonial (Public Form)
```
POST /api/testimonials/submit
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Company Name",
  "role": "CEO",
  "rating": 5,
  "feedback": "Great experience!",
  "service": "Web Development"
}
```

## Component Props

```typescript
interface TestimonialsSectionProps {
  limit?: number;        // Default: 6
  showTitle?: boolean;   // Default: true
  service?: string;      // Filter by service (optional)
}
```

## Testimonial Schema

```typescript
interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  rating: number;        // 1-5
  feedback: string;
  service?: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  featured?: boolean;
}
```

## Next Steps

1. ✅ Run `seed-testimonials.sql` in Supabase
2. ✅ Verify testimonials appear in database
3. ⏳ Add `<TestimonialsSection />` to homepage
4. ⏳ Add filtered testimonials to service pages
5. ⏳ (Optional) Create admin panel for managing testimonials

---

**Note**: The testimonials component will gracefully hide if no testimonials are found, so it's safe to add it to pages even before seeding data.
