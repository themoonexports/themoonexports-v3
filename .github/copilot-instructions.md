# Copilot Instructions - The Moon Exports Next.js Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a **Next.js 15** TypeScript project for **The Moon Exports** - a handicrafts e-commerce website specializing in buffalo horn, wooden crafts, and resin products.

## Key Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React** for component architecture
- **SEO optimization** with Next.js built-in features

## Development Guidelines

### Component Structure
- Use functional components with TypeScript interfaces
- Follow Next.js App Router conventions (`app/` directory)
- Implement responsive design with Tailwind CSS classes
- Create reusable UI components in `src/components/`

### Naming Conventions
- Use PascalCase for React components (`ProductCard.tsx`)
- Use kebab-case for pages and routes (`horn-crafts/page.tsx`)
- Use camelCase for functions and variables
- Use UPPER_CASE for constants and environment variables

### SEO and Performance
- Use Next.js `Metadata` API for SEO optimization
- Implement proper `loading.tsx` and `error.tsx` pages
- Use `Image` component from `next/image` for optimized images
- Implement proper schema markup for e-commerce content

### Content Migration Priorities
1. **Product Pages**: Horn crafts, wooden crafts, resin products
2. **Main Pages**: Home, About, Contact, Products overview
3. **Legal Pages**: Privacy policy, terms, imprint
4. **SEO Elements**: Structured data, meta tags, sitemaps

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use Tailwind utility classes over custom CSS
- Implement proper error handling and loading states
- Use React Server Components where appropriate

### Business Context
- **Company**: The Moon Exports (established 2015)
- **Location**: Sambhal, Moradabad, India
- **Products**: Buffalo horn handicrafts, wooden crafts, resin products
- **Target**: B2B exports and luxury decor businesses
- **Contact**: +91 8909070131, info@themoonexports.com

### Migration Notes
- Original site uses Bootstrap - migrate to Tailwind CSS equivalents
- Preserve existing SEO structure and meta tags
- Maintain existing social media integration
- Keep existing contact forms and newsletter signup functionality
- Preserve Google Analytics and Yandex Metrika tracking
