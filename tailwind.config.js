/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9f4',
          100: '#dcf1e3',
          200: '#bce3cb',
          300: '#8ccdac',
          400: '#57b085',
          500: '#329467',
          600: '#227752',
          700: '#1c5f43',
          800: '#194c37',
          900: '#153f2e',
          950: '#0a2319',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
