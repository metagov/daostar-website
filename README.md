# DAOstar Website

The official DAOstar website showcasing DAO research reports, programs, and researchers. Built with modern web technologies for optimal performance and maintainability.

## Features

- **Research Reports**: Browse and download research papers on DAO governance, security, and regional studies
- **Research Programs**: Information about research collaboration opportunities and fellowship programs
- **Researchers**: Gallery of current and past research fellows with their profiles
- **Multi-language Support**: Some reports are available in multiple languages (English, Korean, Mandarin)
- **Responsive Design**: Optimized for desktop and mobile viewing

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Blueprint.js**: UI components library
- **React 19**: Latest React version

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Blueprint.js theme
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   └── ResearchPage.tsx     # Main research page component
└── public/
    ├── fonts/               # Geogrotesque font files
    ├── reports/             # Research PDF files
    └── researchers/         # Researcher profile images
```

## Assets

The application includes:
- **Fonts**: Geogrotesque font family (Regular and Medium weights)
- **PDFs**: Research reports and papers
- **Images**: Researcher profile photos, DAOstar logos, and stars background
- **Background**: Starfield background image matching the original design

## Design System

The application maintains the original DAOstar visual design:
- **Colors**: Dark theme (#191919) with light text (#e9e9e9)
- **Typography**: Geogrotesque font family with Google Fonts fallbacks
- **Background**: Starfield background image with fixed attachment
- **UI Components**: Blueprint.js components with custom theming
- **Layout**: CSS Grid for responsive card layouts
- **Spacing**: 20vh top margin matching the original explore page

## Key Components

### ResearchPage
Main component containing three sections:
- `ReportsSection`: Research papers with PDF download functionality
- `ProgramsSection`: Research collaboration opportunities
- `FellowsSection`: Profiles of research fellows

### ResearchCard
Reusable card component for displaying research papers with:
- PDF download functionality
- Language selection for multi-language reports
- Google Analytics tracking

### FellowCard
Profile card component for researchers with:
- Profile image with fallback to initials
- Name display
- Hover effects

## Features Implemented

1. **Clean Component Architecture**: Separated concerns with TypeScript interfaces
2. **Responsive Design**: Mobile-first approach with CSS Grid
3. **Accessibility**: Proper alt text and semantic HTML
4. **Performance**: Next.js Image optimization and static generation
5. **Type Safety**: Full TypeScript implementation
6. **Modern Build**: Next.js 15 with Turbopack support

## Architecture

This application is built with a clean, modern architecture:
- Component-based React architecture
- TypeScript for type safety
- Next.js App Router for optimal performance
- Tailwind CSS for styling
- Blueprint.js for UI components

## Development Notes

- Uses Next.js App Router for modern React development
- Blueprint.js components are themed to match original design
- CSS imports use modern import syntax (not webpack ~)
- All components are client-side rendered for interactivity
- Images use Next.js Image component for optimization

## License

This project maintains the same license as the original DAOstar repository.

## Contributing

Contributions are welcome! Please follow standard GitHub practices for pull requests and issues.