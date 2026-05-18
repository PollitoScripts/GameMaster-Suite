/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Esto le dice que busque en toda la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#070a13',
        }
      }
    },
  },
  plugins: [],
}