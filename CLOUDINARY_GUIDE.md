# Cloudinary Integration Guide

## Overview
Your Moonlit Studios site now has complete Cloudinary integration for managing, optimizing, and serving images through their CDN.

## Setup Complete ✅

### Environment Variables (Already Configured)
```env
CLOUDINARY_CLOUD_NAME=xxxxx
CLOUDINARY_API_KEY=xxxxx
CLOUDINARY_API_SECRET=xxxxx
```

### Installed Packages
- `cloudinary` - Official Cloudinary SDK

## Helper Functions Available

All functions are in `src/lib/cloudinary.ts`:

### 1. Upload Images
```typescript
import { uploadImage } from '@/lib/cloudinary';

// Upload to 'portfolio' folder
const result = await uploadImage('/path/to/image.jpg', 'portfolio');

// Upload with custom public ID
const result = await uploadImage('/path/to/image.jpg', 'portfolio', 'my-project');

// Returns:
// {
//   url: 'https://res.cloudinary.com/...',
//   publicId: 'portfolio/my-project',
//   width: 1920,
//   height: 1080,
//   format: 'jpg'
// }
```

### 2. Delete Images
```typescript
import { deleteImage } from '@/lib/cloudinary';

const success = await deleteImage('portfolio/my-project');
```

### 3. Get Optimized URLs
```typescript
import { getOptimizedImageUrl } from '@/lib/cloudinary';

// Basic optimization (auto format, auto quality)
const url = getOptimizedImageUrl('portfolio/my-project');

// With transformations
const url = getOptimizedImageUrl('portfolio/my-project', {
  width: 800,
  height: 600,
  crop: 'fill',
  quality: 'auto',
  format: 'auto',
  gravity: 'auto'
});
```

### 4. Responsive Images
```typescript
import { getResponsiveSrcSet } from '@/lib/cloudinary';

// Generates srcset for responsive images
const srcSet = getResponsiveSrcSet('portfolio/my-project');

// Use in Next.js Image:
<img
  src={getOptimizedImageUrl('portfolio/my-project')}
  srcSet={srcSet}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Project"
/>
```

### 5. Thumbnails
```typescript
import { getThumbnailUrl } from '@/lib/cloudinary';

// 200x200 thumbnail (default)
const thumb = getThumbnailUrl('portfolio/my-project');

// Custom size
const thumb = getThumbnailUrl('portfolio/my-project', 150);
```

### 6. Blur Placeholders
```typescript
import { getBlurPlaceholder } from '@/lib/cloudinary';

// Tiny blurred version for progressive loading
const placeholder = getBlurPlaceholder('portfolio/my-project');
```

### 7. Quick Helper Functions
```typescript
import { getPortfolioImageUrl, getTestimonialImageUrl } from '@/lib/cloudinary';

// Portfolio images (stored in 'portfolio' folder)
const url = getPortfolioImageUrl('hero-image.jpg');
const url = getPortfolioImageUrl('hero-image.jpg', 1200); // with width

// Testimonial avatars (stored in 'testimonials' folder)
const avatar = getTestimonialImageUrl('john-doe.jpg', 100); // circular 100x100
```

## Usage Examples

### Example 1: Portfolio Project Images
```tsx
import { getPortfolioImageUrl } from '@/lib/cloudinary';
import Image from 'next/image';

export function PortfolioCard({ project }) {
  return (
    <div>
      <Image
        src={getPortfolioImageUrl(project.image, 800)}
        alt={project.title}
        width={800}
        height={600}
        className="rounded-lg"
      />
    </div>
  );
}
```

### Example 2: OG Images (Meta Tags)
```tsx
import { getOptimizedImageUrl } from '@/lib/cloudinary';

export const metadata = {
  openGraph: {
    images: [
      {
        url: getOptimizedImageUrl('og-images/moonlit-studios', {
          width: 1200,
          height: 630,
          format: 'png',
          quality: 90
        }),
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### Example 3: Testimonial Avatars
```tsx
import { getTestimonialImageUrl } from '@/lib/cloudinary';

export function Testimonial({ name, avatar }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={getTestimonialImageUrl(avatar, 64)}
        alt={name}
        className="w-16 h-16 rounded-full"
      />
      <p>{name}</p>
    </div>
  );
}
```

### Example 4: API Route Upload
```tsx
import { uploadImage } from '@/lib/cloudinary';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  // Convert file to buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Upload to Cloudinary
  const result = await uploadImage(buffer, 'portfolio', 'new-project');

  return NextResponse.json({ url: result?.url });
}
```

## Folder Structure in Cloudinary

Organize your images in folders:
- `portfolio/` - Portfolio project images
- `testimonials/` - Client testimonial avatars
- `og-images/` - Open Graph social media images
- `blog/` - Blog post images (future)
- `services/` - Service page images

## Best Practices

1. **Always use transformations** - Don't serve full-resolution images
2. **Use `format: 'auto'`** - Let Cloudinary choose WebP/AVIF for modern browsers
3. **Use `quality: 'auto'`** - Automatically optimize quality
4. **Generate responsive srcsets** - Serve appropriate sizes for different screens
5. **Use blur placeholders** - Better UX with progressive loading
6. **Name files descriptively** - e.g., 'portfolio/moonlit-studios-homepage' not 'img1.jpg'

## Uploading Images to Cloudinary

### Method 1: Cloudinary Dashboard (Easiest)
1. Go to https://cloudinary.com/console
2. Navigate to Media Library
3. Create folders: portfolio, testimonials, og-images
4. Upload images directly

### Method 2: CLI (For Bulk Uploads)
```bash
npm install -g cloudinary-cli
cloudinary config
cloudinary uploader upload image.jpg -f portfolio
```

### Method 3: Programmatically
Use the `uploadImage()` function in an API route or script.

## Migration Checklist

When you're ready to add images to your site:

- [ ] Upload OG image to Cloudinary (`og-images/moonlit-studios`)
- [ ] Update metadata in layout files to use Cloudinary URLs
- [ ] Add portfolio project images
- [ ] Update portfolio components to use `getPortfolioImageUrl()`
- [ ] Add testimonial avatars
- [ ] Update testimonial components to use `getTestimonialImageUrl()`

## Current Status

✅ Cloudinary SDK installed
✅ Helper library created (`src/lib/cloudinary.ts`)
✅ Environment variables configured
⏳ No images currently referenced (ready when you need them)

Your site is 100% ready for Cloudinary! Just upload images to your Cloudinary account and use the helper functions when you're ready to add visuals.
