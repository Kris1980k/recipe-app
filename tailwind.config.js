/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '128':'32rem'
      },
      inset:{
        'middle':'8% 0%',
        'middle-black':'0% 0%'
      }
    },
  },
  plugins: [],
}