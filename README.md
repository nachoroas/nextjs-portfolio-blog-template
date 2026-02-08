# Portfolio & Blog Starter

A production-quality Next.js (App Router) portfolio/blog starter template with a minimalist, professional design. Built with TypeScript, Tailwind CSS, and MDX for content management.

## 🎯 Who is this for?

This template is designed for:
- Software engineers who want a professional portfolio + blog
- Students and early-career developers building a public profile
- Developers who want a static, content-driven site without a backend
- Anyone who wants a clean Next.js App Router starter for personal sites


## 🚀 Features

- **Next.js 14 App Router** with TypeScript
- **Tailwind CSS** for styling with dark mode support
- **MDX** for blog posts and teaching pages
- **Local JSON data** for projects (no backend required)
- **SEO optimized** with metadata, OpenGraph, sitemap, and robots.txt
- **Accessibility** and responsive design
- **Reading time** calculation for blog posts
- **Tag system** for blog posts
- **Project filtering** by type (Professional/Academic/Personal)
- **Table of Contents** for blog posts
- **MDX components** (Callouts, Code blocks)

## 📁 Project Structure

```
.
├── app/                      # Next.js App Router pages
│   ├── blog/                # Blog pages
│   │   ├── [slug]/          # Individual blog post pages
│   │   └── page.tsx         # Blog index page
│   ├── proyectos/           # Projects pages
│   │   ├── [slug]/          # Individual project pages
│   │   ├── ProjectsClient.tsx  # Client component for filtering
│   │   └── page.tsx         # Projects index page
│   ├── docencia/            # Teaching pages
│   │   ├── [slug]/          # Individual teaching entry pages
│   │   └── page.tsx         # Teaching index page
│   ├── contacto/            # Contact page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt generation
├── components/               # React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with social links
│   ├── ProjectCard.tsx      # Project card component
│   ├── PostCard.tsx         # Blog post card component
│   ├── ProjectFilter.tsx    # Project filter component
│   └── mdx/                 # MDX custom components
│       ├── Callout.tsx      # Callout component for MDX
│       └── TableOfContents.tsx  # TOC component
├── content/                 # Content files
│   ├── blog/                # Blog posts (MDX files)
│   └── teaching/            # Teaching entries (MDX files)
├── data/                    # Data files
│   └── projects.json        # Projects data
├── lib/                     # Utility functions
│   ├── projects.ts          # Project data helpers
│   ├── posts.ts             # Blog post helpers
│   └── teaching.ts          # Teaching entry helpers
└── mdx-components.tsx       # MDX component mapping
```

## 🏗️ Architecture

This is a **static-first** Next.js application that generates all pages at build time:

1. **Content Management**: 
   - Blog posts and teaching entries are stored as MDX files in `content/` directory
   - Projects are stored in a JSON file at `data/projects.json`
   - All content is processed at build time (no runtime API calls)

2. **Page Generation**:
   - Static pages are generated using `generateStaticParams()` for dynamic routes
   - Blog posts are parsed using `gray-matter` to extract frontmatter
   - Reading time is calculated using the `reading-time` library

3. **Component Architecture**:
   - Server Components are used by default for better performance
   - Client Components (marked with `"use client"`) are used only when needed (filters, interactive features)
   - Reusable components follow a consistent design system

4. **Styling**:
   - Tailwind CSS for utility-first styling
   - Custom prose styles for MDX content
   - Dark mode support via CSS variables

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone or fork this repository:
```bash
git clone <your-repo-url>
cd Personal-Engineering-Blog-Platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Adding a New Project

Edit `data/projects.json` and add a new project object:

```json
{
  "slug": "my-new-project",
  "title": "My New Project",
  "type": "Professional",
  "summary": "A brief summary of the project",
  "stack": ["React", "TypeScript", "Next.js"],
  "highlights": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  "links": {
    "github": "https://github.com/username/repo",
    "demo": "https://demo.example.com",
    "writeup": null
  },
  "featured": true,
  "tldr": "Brief summary of what the project does",
  "context": "Background and context of the project",
  "myRole": "Your role and responsibilities",
  "architecture": "Technical architecture description",
  "keyDecisions": [
    "Decision 1",
    "Decision 2"
  ],
  "results": "Results and outcomes of the project"
}
```

**Fields:**
- `slug`: URL-friendly identifier (used in `/proyectos/[slug]`)
- `type`: One of `"Professional"`, `"Academic"`, or `"Personal"`
- `featured`: `true` to show on homepage, `false` otherwise
- `links`: Object with optional `github`, `demo`, and `writeup` URLs

### Adding a New Blog Post

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "My Blog Post Title"
date: "2024-01-15"
tags: ["Tag1", "Tag2", "Tag3"]
description: "A brief description for SEO and previews"
---

# My Blog Post Title

Your content here using Markdown/MDX syntax.

<Callout type="info">
This is a callout component!
</Callout>

## Section Heading

More content...
```

**Frontmatter fields:**
- `title`: Post title
- `date`: Publication date (YYYY-MM-DD format)
- `tags`: Array of tag strings
- `description`: SEO description

**MDX Components available:**
- `<Callout type="info|warning|error|success">` - Callout boxes
- Standard Markdown syntax (headings, lists, code blocks, etc.)

### Adding a Teaching Entry

Create a new `.mdx` file in `content/teaching/`:

```mdx
---
title: "Course Name"
date: "2023-01-01"
tags: ["Tag1", "Tag2"]
description: "Course description"
links:
  course: "https://example.com/course"
  materials: "https://example.com/materials"
  github: "https://github.com/username/repo"
---

# Course Name

Your teaching content here...
```

**Frontmatter fields:**
- Same as blog posts, plus optional `links` object with `course`, `materials`, and `github` URLs

### Customizing Your Site

#### Update Personal Information

Search and replace the following placeholder values throughout the codebase:

1. **Name and Title**: 
   - `app/page.tsx` - Hero section (`[Your Name]`, `[Your Role/Title]`)
   - `components/Header.tsx` - Logo/brand name
   - `components/Footer.tsx` - Copyright text
   - `app/layout.tsx` - Metadata (authors, creator)

2. **Contact Information**:
   - `components/Header.tsx` and `components/Footer.tsx` - Social links
   - `app/page.tsx` - Contact strip
   - `app/contacto/page.tsx` - Contact page
   - Replace: `your.email@example.com`, `https://linkedin.com/in/yourprofile`, `https://github.com/yourusername`

3. **Site Metadata**:
   - `app/layout.tsx` - Update title, description, OpenGraph, Twitter cards
   - `app/sitemap.ts` and `app/robots.ts` - Update domain URL

#### Update Content

- Replace all lorem ipsum text with your actual content
- Update project data in `data/projects.json`
- Add your blog posts in `content/blog/`
- Add your teaching entries in `content/teaching/`

## 🎨 Customization

### Design System

The design uses a consistent system:

- **Container width**: `container mx-auto px-4` (max-width with padding)
- **Typography**: Tailwind's default font scale
- **Colors**: Gray scale with dark mode support
- **Spacing**: Consistent gap and padding values
- **Cards**: Rounded borders with shadow-sm, hover:shadow-md

### Styling MDX Content

MDX content uses the `.prose` class with custom styles defined in `app/globals.css`. Modify these styles to customize the appearance of blog posts and teaching entries.

### Adding New MDX Components

1. Create component in `components/mdx/`
2. Export from `components/mdx/index.ts`
3. Component will be available in all MDX files

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

The site will be built as a static site (SSG) by default, which is perfect for this use case.

### Other Platforms

Since this is a static Next.js app, it can be deployed to any static hosting service:
- Netlify
- GitHub Pages (with export)
- AWS S3 + CloudFront
- Any other static host

For static export, add to `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  // ... rest of config
};
```

Then run `npm run build` and deploy the `out/` directory.

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔍 SEO Features

- Dynamic metadata for all pages
- OpenGraph tags for social sharing
- Twitter Card support
- Automatic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration
- Semantic HTML structure
- Reading time calculation

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a starter template. Feel free to fork and customize for your needs!

---

**Note**: This template includes placeholder content (lorem ipsum, example URLs, etc.). Remember to replace all placeholder content with your actual information before deploying.
