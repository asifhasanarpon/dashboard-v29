/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        canvas: '#F6F5F2',
        coral: {
          500: '#FF6B57',
          400: '#FF856D',
        }
      }
    },
  },
  plugins: [],
}
