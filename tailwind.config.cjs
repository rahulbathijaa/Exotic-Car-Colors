/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/index.css",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './public/index.html',
    './src/components/AllPosts.js',
    './src/App.js',
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
