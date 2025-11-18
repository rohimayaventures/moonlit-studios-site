# 🌙 Moonlit Studios Blog Images

This folder contains images for blog posts.

## 📁 Folder Structure

Organize images by blog post slug for easy management:

```
/public/blog/images/
├── most-influential-women/
│   ├── hero.jpg
│   ├── workspace.jpg
│   └── award.jpg
├── moonlit-trifecta/
│   ├── hero.jpg
│   └── diagram.png
├── ghibli-ux-philosophy/
│   ├── hero.jpg
│   └── examples.jpg
└── README.md (this file)
```

## 🎨 Image Guidelines

**Recommended Sizes:**
- Hero images: 1200x630px (16:9 ratio)
- In-content images: 800x600px or 1000x750px
- Thumbnails: 400x300px

**File Naming:**
- Use lowercase
- Use hyphens for spaces
- Be descriptive: `studio-workspace.jpg` not `img1.jpg`

**Optimization:**
- Compress images before uploading (use TinyPNG or similar)
- Keep file sizes under 500KB when possible
- Use WebP format for modern browsers (with JPG fallback)

## 📝 Using Images in Blog Posts

In your blog post markdown/content, reference images like this:

```jsx
<Image
  src="/blog/images/post-slug/hero.jpg"
  alt="Description for accessibility"
  width={1200}
  height={630}
/>
```

## 🌙 Moonlit Studios Brand Colors (for graphics)

- Midnight: #0A1128
- Mermaid Teal: #4A9B9B
- Lunar Gold: #FFD700
- Phoenix Fire: #FF8C42
- Starlight: #CAE9FF
- Pearl White: #FAFAFA
