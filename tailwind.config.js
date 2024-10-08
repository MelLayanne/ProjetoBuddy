/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tinos: ['Tinos', 'serif'],
        fira: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        azul: '#81BAEF'
      }
    },
  },
  plugins: [],
}