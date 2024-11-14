/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a7f3d0',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
        secondary: {
          light: '#f3f4f6',
          DEFAULT: '#e5e7eb',
          dark: '#374151',
        },
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};
