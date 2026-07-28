/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef3f9',
          100: '#d7e6f2',
          200: '#b0cce6',
          300: '#82abd2',
          400: '#5688ba',
          500: '#366a9c',
          600: '#27527d',
          700: '#1d3f63',
          800: '#16304c',
          900: '#0b2545',
          950: '#071a33',
        },
        gold: {
          50: '#fbf6e7',
          100: '#f5ebc4',
          200: '#ecd98c',
          300: '#e0c157',
          400: '#d4af37',
          500: '#c9a227',
          600: '#a8841e',
          700: '#846718',
          800: '#5f4a12',
          900: '#3d300c',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
