/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        'custom-primary': '#1a1e23',
        'custom-dark': '#eeeff7'
      },
      backgroundColor: {
        'custom-primary': '#1a1e23',
        'custom-dark': '#eeeff7'
      }
    },
  },
  plugins: [],
}

