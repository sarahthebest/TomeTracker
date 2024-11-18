/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A3B18A',
        secondary: '#588157',
        bg: '#344E41',
        border: 'rgba(254, 253, 255, 0.495)',
        text: '#DAD7CD',
      },
    },
  },
  plugins: [],
}
