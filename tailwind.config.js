/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        notion: {
          DEFAULT: '#2F3437',
          light: '#F7F6F3',
          hover: '#E9E8E3',
          dark: {
            hover: '#37352F',
            DEFAULT: '#191919',
          }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
};