<div align="center">

# 🚀 Ngoga Portfolio

### A Modern Full-Stack Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[**Live Demo**](https://ngoga-portfolio.vercel.app/) · [**Report Bug**](https://github.com/ngoguessfidele/ngoga_portfolio/issues) · [**Request Feature**](https://github.com/ngoguessfidele/ngoga_portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Component Documentation](#-component-documentation)
- [Configuration](#️-configuration)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Ngoga Portfolio** is a professional, responsive portfolio website built with cutting-edge web technologies. It showcases full-stack development expertise through an elegant design, smooth animations, and optimized performance.

The portfolio features:
- **6 Featured Projects** spanning frontend, backend, and full-stack development
- **Interactive UI** with dark/light mode support
- **Contact Form** for professional inquiries
- **SEO Optimized** for maximum visibility

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern Design** | Clean, professional UI with consistent spacing and typography |
| 📱 **Fully Responsive** | Seamless experience across desktop, tablet, and mobile devices |
| 🌓 **Dark Mode** | Automatic theme detection with system preference support |
| ⚡ **Performance Optimized** | Next.js image optimization, code splitting, and lazy loading |
| 🔍 **SEO Ready** | Meta tags, Open Graph, and structured data for search engines |
| ♿ **Accessible** | WCAG compliant with proper ARIA labels and keyboard navigation |
| 📧 **Contact Form** | Functional form with validation for professional inquiries |
| 🚀 **Fast Loading** | Sub-second First Contentful Paint (FCP) |

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.6 | React framework with App Router |
| [React](https://reactjs.org/) | 19.2.3 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |

### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting and style enforcement |
| PostCSS | CSS processing and optimization |
| Vercel | Deployment and hosting platform |

### Fonts

- **Geist Sans** - Primary font for body text
- **Geist Mono** - Monospace font for code elements

---

## 📁 Project Structure

```
ngoga_portfolio/
├── 📂 app/                          # Next.js App Router directory
│   ├── 📄 globals.css               # Global styles and Tailwind imports
│   ├── 📄 layout.tsx                # Root layout with metadata and fonts
│   └── 📄 page.tsx                  # Home page component
│
├── 📂 components/                   # React UI components
│   ├── 📄 Header.tsx                # Navigation header with mobile menu
│   ├── 📄 Hero.tsx                  # Landing section with CTA buttons
│   ├── 📄 About.tsx                 # Personal bio and expertise areas
│   ├── 📄 Skills.tsx                # Technical skills showcase
│   ├── 📄 Projects.tsx              # Featured projects gallery
│   └── 📄 Contact.tsx               # Contact form and info
│
├── 📂 public/                       # Static assets
│   └── 📂 images/                   # Project screenshots and media
│
├── 📄 eslint.config.mjs             # ESLint configuration
├── 📄 next.config.ts                # Next.js configuration
├── 📄 package.json                  # Dependencies and scripts
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 LICENSE                       # MIT License
└── 📄 README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.17.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 or **yarn** >= 1.22.0 or **pnpm** >= 8.0.0
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ngoguessfidele/ngoga_portfolio.git
   cd ngoga_portfolio
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

### Running Locally

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with hot reload |
| `build` | `npm run build` | Create optimized production build |
| `start` | `npm run start` | Start production server |
| `lint` | `npm run lint` | Run ESLint for code quality |

---

## 📚 Component Documentation

### `<Header />`

**File:** `components/Header.tsx`

Fixed navigation header with responsive mobile menu.

| Feature | Description |
|---------|-------------|
| **Location** | Fixed top position with backdrop blur |
| **Navigation** | Links to About, Skills, Projects, Contact sections |
| **Mobile** | Hamburger menu with animated toggle |
| **State** | Uses React `useState` for menu toggle |

---

### `<Hero />`

**File:** `components/Hero.tsx`

Landing section with introduction and call-to-action buttons.

| Element | Description |
|---------|-------------|
| **Heading** | Name and title with gradient background |
| **Description** | Professional summary (4 years experience) |
| **CTAs** | "View My Work" and "Get In Touch" buttons |
| **Styling** | Gradient background, responsive typography |

---

### `<About />`

**File:** `components/About.tsx`

Personal biography and expertise areas.

| Section | Content |
|---------|---------|
| **Bio** | 3 paragraphs about experience and interests |
| **Expertise List** | 6 bullet points covering core competencies |
| **Layout** | 2-column grid on desktop, stacked on mobile |

---

### `<Skills />`

**File:** `components/Skills.tsx`

Technical skills organized by category.

| Category | Skills Count | Color Theme |
|----------|--------------|-------------|
| **Frontend** | 15 skills | Blue |
| **Backend** | 13 skills | Green |
| **General** | 8 skills | Purple |

**Skills Data Structure:**
```typescript
const frontendSkills: string[] = [
  "HTML5", "CSS3/SCSS", "JavaScript ES6+", "React", "Next.js", 
  "TypeScript", "Tailwind CSS", "State Management", "UI Testing", 
  "Responsive Design", "Server-Side Rendering", "Accessibility", 
  "SEO", "RESTful APIs", "Figma"
];
```

---

### `<Projects />`

**File:** `components/Projects.tsx`

Featured projects gallery with cards and links.

**Project Interface:**
```typescript
interface Project {
  id: string;                              // Unique identifier
  title: string;                           // Project name
  description: string;                     // Brief description
  image: string;                           // Screenshot path
  technologies: string[];                  // Tech stack
  githubUrl: string;                       // Repository link
  liveUrl?: string;                        // Optional live demo
  category: 'frontend' | 'backend' | 'fullstack';
}
```

**Featured Projects:**

| Project | Category | Technologies |
|---------|----------|--------------|
| School Management System | Fullstack | Next.js, TypeScript, Tailwind CSS |
| NestJS Blog API | Backend | NestJS, MongoDB, JWT, Swagger |
| Ngoga Portfolio | Frontend | Next.js, React, TypeScript |
| Pineapple Island Resort | Frontend | Next.js, Tailwind CSS |
| E-Commerce Landing | Frontend | React, Vite |
| GPT-3 OpenAI Landing | Frontend | React, CSS |

---

### `<Contact />`

**File:** `components/Contact.tsx`

Contact form and information section.

| Element | Description |
|---------|-------------|
| **Form Fields** | Name, Email, Message (all required) |
| **Contact Info** | Email, Location, LinkedIn |
| **Validation** | HTML5 native validation |
| **State** | Controlled form with `useState` |

**Form Data Structure:**
```typescript
interface FormData {
  name: string;
  email: string;
  message: string;
}
```

---

## ⚙️ Configuration

### Environment Variables

This project runs without environment variables for basic functionality. For extended features:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO | No |
| `CONTACT_EMAIL` | Email for form submissions | No |

### Tailwind CSS

Custom theme configuration in `globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### SEO Configuration

Metadata configured in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Ngoga Fidele - Full-Stack Developer",
  description: "Experienced React and NestJS developer...",
  keywords: ["React", "NestJS", "Full-Stack Developer", "TypeScript"],
  authors: [{ name: "Ngoga Fidele" }],
  openGraph: {
    title: "Ngoga Fidele - Full-Stack Developer",
    description: "...",
    type: "website",
  },
};
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Import Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository

2. **Configure Build**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Deploy**
   - Click "Deploy"
   - Vercel auto-detects Next.js and configures optimally

### Other Platforms

<details>
<summary><b>Netlify</b></summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```
</details>

<details>
<summary><b>Docker</b></summary>

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```
</details>

---

## 📊 Performance

### Lighthouse Scores

| Metric | Score |
|--------|-------|
| ⚡ Performance | 95+ |
| ♿ Accessibility | 95+ |
| ✅ Best Practices | 95+ |
| 🔍 SEO | 100 |

### Core Web Vitals

| Metric | Target | Status |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | ✅ |
| FID (First Input Delay) | < 100ms | ✅ |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ |
| FCP (First Contentful Paint) | < 1s | ✅ |

### Optimizations Applied

- ✅ Next.js Image Optimization
- ✅ Code Splitting & Lazy Loading
- ✅ Font Optimization (Geist)
- ✅ CSS Purging (Tailwind)
- ✅ Static Generation where possible

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly
- Be respectful and constructive in discussions

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Ngoga Fidele

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📬 Contact

**Ngoga Fidele** - Full-Stack Developer

| Platform | Link |
|----------|------|
| 📧 Email | [mngogafidele@gmail.com](mailto:mngogafidele@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/musafiri-fidele-6aa69311b](https://www.linkedin.com/in/musafiri-fidele-6aa69311b/) |
| 🐙 GitHub | [github.com/ngoguessfidele](https://github.com/ngoguessfidele) |
| 🌐 Portfolio | [ngoga-portfolio.vercel.app](https://ngoga-portfolio.vercel.app/) |

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Built with ❤️ using Next.js, React, and TypeScript**

</div>
