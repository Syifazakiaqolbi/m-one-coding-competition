/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#F59E0B',
        accent: '#10B981',
        background: '#F9FAFB',
      },
    },
  },
  plugins: [],
}