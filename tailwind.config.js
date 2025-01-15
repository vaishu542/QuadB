/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenCol: '#357937',
        greenText: '#98E19B',
        darkgreenText: '#1B281B', 
        darkgreenCol: '#35793729',
        darkBg: '#242424',
        ash: '#EEF6EF',
        darkash: '#2C2C2C',
        

      },
    },
  },
  darkMode: 'class', // Enables dark mode using 'dark' class
  plugins: [],
}
