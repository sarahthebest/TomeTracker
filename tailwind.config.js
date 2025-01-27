/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B1C32',
        secondary: '#6A1E55',
        bg: '#1A1A1D',
        input:'rgb(232, 232, 232)',
        accent: '#A64D79',
        pop: '#F0C1E1',
        border: 'rgba(254, 253, 255, 0.495)',
        text: '#f1f1f1',
        active: 'rgb(255, 0, 170)'
      },
    },
  },
  plugins: [],
}
