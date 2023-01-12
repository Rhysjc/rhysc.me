/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './blog/**/*.mdx'],
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
