/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5C8374',
        secondary: '#183D3D',
        bg: '#040D12',
        accent:'#93B1A6',
        border: 'rgba(254, 253, 255, 0.495)',
        text: '#0b0b0b',
      },
    },
  },
  plugins: [],
}
