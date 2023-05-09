/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Inria Sans, sans-serif'],
        'Impact': [ 'Impact', 'Arial Black'],
      },
      colors: {
        'green': '#7EBC59',
        'white': '#ffffff',
        'gray': '#D9D9D9',
        'dark-blue': '#0E0E27',
        'middle-gray': '#A4A4A4',
        'red':'#dc2626',
        'orange': '#f59e0b',
        'query': '#ededff'
      }
    },
  },
  plugins: [],
};
