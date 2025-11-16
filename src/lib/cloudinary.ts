/**
 * Cloudinary Integration Helper
 *
 * Upload, manage, and optimize images with Cloudinary CDN
 */

import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
  api_key: process.env.CLOUDINARY_API_KEY || '',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

/**
 * Upload an image to Cloudinary
 * @param file - File path or buffer
 * @param folder - Cloudinary folder (e.g., 'portfolio', 'testimonials')
 * @param publicId - Custom public ID (optional)
 */
export async function uploadImage(
  file: string | Buffer,
  folder: string = 'portfolio',
  publicId?: string
): Promise<{
  url: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
} | null> {
  try {
    const uploadOptions: any = {
      folder,
      resource_type: 'image',
      format: 'auto',
      quality: 'auto',
    };

    if (publicId) {
      uploadOptions.public_id = publicId;
    }

    const result = await cloudinary.uploader.upload(
      typeof file === 'string' ? file : `data:image/png;base64,${file.toString('base64')}`,
      uploadOptions
    );

    console.log('✅ Cloudinary upload successful:', result.public_id);

    return {
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
    };
  } catch (error: any) {
    console.error('❌ Cloudinary upload error:', error.message);
    return null;
  }
}

/**
 * Delete an image from Cloudinary
 * @param publicId - The public ID of the image to delete
 */
export async function deleteImage(publicId: string): Promise<boolean> {
  try {
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === 'ok') {
      console.log('✅ Cloudinary image deleted:', publicId);
      return true;
    } else {
      console.error('❌ Cloudinary delete failed:', result.result);
      return false;
    }
  } catch (error: any) {
    console.error('❌ Cloudinary delete error:', error.message);
    return false;
  }
}

/**
 * Generate optimized Cloudinary URL with transformations
 * @param publicId - The public ID of the image
 * @param options - Transformation options
 */
export function getOptimizedImageUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb';
    quality?: number | 'auto';
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
    gravity?: 'auto' | 'face' | 'center' | 'north' | 'south' | 'east' | 'west';
    blur?: number;
    grayscale?: boolean;
  }
): string {
  const transformations: any = {
    quality: options?.quality || 'auto',
    fetch_format: options?.format || 'auto',
  };

  if (options?.width) transformations.width = options.width;
  if (options?.height) transformations.height = options.height;
  if (options?.crop) transformations.crop = options.crop;
  if (options?.gravity) transformations.gravity = options.gravity;
  if (options?.blur) transformations.effect = `blur:${options.blur}`;
  if (options?.grayscale) transformations.effect = 'grayscale';

  return cloudinary.url(publicId, transformations);
}

/**
 * Get responsive srcset URLs for different screen sizes
 * @param publicId - The public ID of the image
 * @param widths - Array of widths for responsive images
 */
export function getResponsiveSrcSet(
  publicId: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1536]
): string {
  return widths
    .map((width) => {
      const url = cloudinary.url(publicId, {
        width,
        quality: 'auto',
        fetch_format: 'auto',
        crop: 'scale',
      });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Generate a thumbnail URL
 * @param publicId - The public ID of the image
 * @param size - Thumbnail size (default: 200)
 */
export function getThumbnailUrl(publicId: string, size: number = 200): string {
  return cloudinary.url(publicId, {
    width: size,
    height: size,
    crop: 'thumb',
    gravity: 'auto',
    quality: 'auto',
    fetch_format: 'auto',
  });
}

/**
 * Generate a blurred placeholder URL for progressive loading
 * @param publicId - The public ID of the image
 */
export function getBlurPlaceholder(publicId: string): string {
  return cloudinary.url(publicId, {
    width: 20,
    quality: 1,
    fetch_format: 'auto',
    effect: 'blur:1000',
  });
}

/**
 * Helper to get portfolio image URL
 * @param filename - Image filename (will be stored in 'portfolio' folder)
 * @param width - Optional width for optimization
 */
export function getPortfolioImageUrl(filename: string, width?: number): string {
  const publicId = `portfolio/${filename.replace(/\.[^/.]+$/, '')}`; // Remove extension

  if (width) {
    return getOptimizedImageUrl(publicId, { width, crop: 'scale' });
  }

  return cloudinary.url(publicId, {
    quality: 'auto',
    fetch_format: 'auto',
  });
}

/**
 * Helper to get testimonial image URL
 * @param filename - Image filename (will be stored in 'testimonials' folder)
 * @param size - Optional size for circular avatars
 */
export function getTestimonialImageUrl(filename: string, size?: number): string {
  const publicId = `testimonials/${filename.replace(/\.[^/.]+$/, '')}`;

  if (size) {
    return getThumbnailUrl(publicId, size);
  }

  return cloudinary.url(publicId, {
    quality: 'auto',
    fetch_format: 'auto',
  });
}
