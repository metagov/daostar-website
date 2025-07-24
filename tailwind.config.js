/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from your design
        brand: {
          light: 'rgb(233, 233, 233)',
          dark: '#191919',
          accent: '#F8E441',
          secondary: 'rgb(66, 142, 255)',
        },
        // Card system
        card: {
          bg: 'rgb(41,41,41)',
          'bg-hover': 'rgb(52, 52, 52)',
          border: 'rgb(78,78,78)',
          'border-hover': 'rgb(111, 111, 111)',
        },
        // Text colors
        text: {
          placeholder: 'rgb(156,156,156)',
          primary: 'rgb(233, 233, 233)',
          secondary: 'rgba(255, 255, 255, 0.8)',
        }
      },
      fontFamily: {
        sans: ['Geogrotesque', 'Roboto Condensed', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['Geogrotesque', 'IBM Plex Mono', 'Roboto Condensed', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'hero': '3rem',
        'section': '2.5rem',
      },
      backgroundImage: {
        'stars': "url('/img/stars.jpg')",
        'mesh': "url('/img/mesh.png')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'crawl': 'crawl 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        crawl: {
          '0%': { transform: 'perspective(800px) rotateX(15deg) translateY(100vh)' },
          '100%': { transform: 'perspective(800px) rotateX(15deg) translateY(-100vh)' },
        },
      },
    },
  },
  plugins: [],
}