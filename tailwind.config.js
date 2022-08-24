/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Roboto Mono', 'serif'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
