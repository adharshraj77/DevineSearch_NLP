/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        academia: {
          bg: '#1f1d1b',
          dark: '#1c1c1c',
          gold: '#d4af37',
          muted: '#bdb6a5',
          cream: '#f9f5ef',
          paper: '#2f2f2f',
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};