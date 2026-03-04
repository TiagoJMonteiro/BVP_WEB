/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#991b1b', 
          gold: '#d97706', 
          gray: '#f4f4f5', // The light gray for the bright sections
          dark: '#1a1b1b', // Your Cinza Escuro (Navbar & Footer background)
          darkLight: '#1e1f1e', // Your Cinza Claro (Services background)
        }
      }
    },
  },
  plugins: [],
}