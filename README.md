# The Moon Exports - Next.js Website

A modern, responsive website for The Moon Exports - a premium handicrafts manufacturer and exporter specializing in buffalo horn, wooden crafts, and resin products.

## About The Project

This Next.js application is a complete refactor of the original static HTML website, featuring:

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **SEO Optimized**: Built-in Next.js SEO features with proper meta tags and Wikidata integration
- **Performance**: Optimized images, lazy loading, and modern web standards
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Structured Data**: Schema.org markup with Wikidata entity linking

## Company Information

- **Company**: The Moon Exports (Est. 2015)
- **Founder**: Kamran Khan
- **Location**: Sambhal, Moradabad, India
- **Specialization**: Buffalo horn handicrafts, wooden crafts, resin products
- **Contact**: +91 8909070131, info@themoonexports.com
- **Wikidata Entity**: [Q101242602](https://www.wikidata.org/wiki/Q101242602)

## SEO & Knowledge Graph

This website leverages structured data to enhance search engine visibility:

- **Wikidata Integration**: Official Wikidata entity [Q101242602](https://www.wikidata.org/wiki/Q101242602)
- **Schema.org Markup**: Comprehensive structured data including:
  - Organization details with Wikidata @id
  - Product catalog information
  - Contact and location data
  - Business classifications and identifiers
- **Knowledge Graph**: Linked data connecting to:
  - Google Maps (CID: 7721261087930652332)
  - LinkedIn Company Profile (ID: 6636178)
  - Crunchbase Organization Profile
  - Global Location Number: 12001092641460

This structured approach helps search engines understand our business context and display rich snippets in search results.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/themoonexports-nextjs.git
cd themoonexports-nextjs
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

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products overview
│   ├── horn-crafts/       # Horn crafts category
│   ├── wooden-crafts/     # Wooden crafts category
│   ├── resin/             # Resin products category
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── ProductCategories.tsx
│   └── CompanyOverview.tsx
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── data/                  # Static data files
```

## Features

### Current Implementation
- ✅ Responsive navigation with mobile menu
- ✅ Hero carousel with smooth transitions
- ✅ Product category showcase
- ✅ Company overview section
- ✅ Contact page with form
- ✅ About page with company story
- ✅ Products overview page
- ✅ SEO optimized with proper metadata
- ✅ Social media integration
- ✅ Modern design with Tailwind CSS

### Planned Features
- [ ] Product detail pages for each category
- [ ] Newsletter signup integration
- [ ] Contact form backend integration
- [ ] Multi-language support (German)
- [ ] Product gallery with filtering
- [ ] Blog section
- [ ] Customer testimonials
- [ ] Online catalog/brochure download

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Image Optimization**: Next.js Image component
- **SEO**: Next.js built-in metadata API

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Code Style

- Follow TypeScript strict mode
- Use ESLint configuration
- Prefer Tailwind utility classes
- Use React Server Components where possible
- Implement proper error boundaries and loading states

## Migration from Original Site

This project migrates the original static HTML site to a modern Next.js application while preserving:

- SEO structure and meta tags
- Social media integration  
- Contact information and forms
- Product categorization
- Google Analytics tracking (to be added)
- Existing brand identity and design elements

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Use Next.js SSG settings
- **Self-hosted**: Use `npm run build` and serve the `out` directory

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is proprietary to The Moon Exports. All rights reserved.

## Contact

For technical questions about this project:
- **Developer**: [Your Name]
- **Email**: [your.email@example.com]

For business inquiries:
- **The Moon Exports**: info@themoonexports.com
- **Phone**: +91 8909070131
