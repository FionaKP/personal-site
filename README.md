# Fiona Prendergast - Personal Portfolio

A modern, hand-crafted personal portfolio website showcasing my projects, experience, and personality. Built with Next.js, TypeScript, and Tailwind CSS.

**Live Site:** [https://fionaprendergast.vercel.app/](https://fionaprendergast.vercel.app/) 

## About This Project

This portfolio started as a simple HTML/CSS/JS site from a long time ago as a test and strictly personal project and was rebuilt from the ground up using modern web technologies. The goal was to create something that not only showcases my work but also reflects who I am as a developer, engineer, and person with a bit of my personality through hand-drawn design elements and playful interactions. 

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Fonts:** Google Fonts (Poppins, Roboto, Caveat)
- **Deployment:** [Vercel](https://vercel.com/)

### Key Features

- **Hand-drawn aesthetic** - Custom SVG doodles including sketchy corners, paper airplanes, arrows, and annotations
- **Interactive word marquee** - Hover effects that transform words to reveal descriptors
- **Hidden easter egg** - A secret photo gallery accessible through a subtle camera icon
- **Responsive design** - Fully optimized for mobile, tablet, and desktop
- **Smooth animations** - Cycling hero text, hover transitions, and scroll effects

## What I Learned

Building this portfolio taught me several valuable skills:

- **Next.js App Router** - Understanding the new app directory structure, layouts, and server/client components
- **TypeScript with React** - Proper typing for components, props, and state management
- **Tailwind CSS** - Utility-first styling, responsive design patterns, and custom configurations
- **SVG Creation** - Hand-coding SVG paths for custom illustrations and animations
- **Component Architecture** - Breaking down a design into reusable, maintainable components
- **CSS Animations** - Creating smooth transitions and hover effects
- **Responsive Design** - Mobile-first approach with breakpoint-based layouts

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with fonts
│   ├── resume/           # Full resume page
│   └── gallery/          # Hidden photo gallery
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section with cycling words
│   ├── About.tsx         # About me section
│   ├── Projects.tsx      # Project showcase grid
│   ├── Experience.tsx    # Work experience timeline
│   ├── WordMarquee.tsx   # Interactive word banner
│   ├── Contact.tsx       # Contact form and links
│   ├── Footer.tsx        # Footer with social links
│   └── HandDrawn.tsx     # Custom SVG doodle components
└── public/
    ├── images/           # Hero and profile photos
    └── gallery/          # Gallery photos
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FionaKP/personal-site.git
   cd personal-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Potential Future Improvements

- [ ] Add dark mode toggle
- [ ] Implement contact form backend (currently frontend only)
- [ ] Add more projects as I complete them
- [ ] Blog section for writing about my experiences
- [ ] Improve accessibility (ARIA labels, keyboard navigation)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with Next.js, TypeScript & Tailwind CSS
