/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      transitionProperty: {
        'opacity': 'opacity'
      },
      textColor: {
        'custom-sharkText': '#1a1e23',
        'custom-whisperText': '#eeeff7'
      },
      backgroundColor: {
        'custom-shark': '#1a1e23',
        'custom-whisper': '#eeeff7',
        'custom-bismark': '#527089',
        'custom-pigeon': '#a7bbd3'
      },
      keyframes:
      {
        'fade-in': {
          '0%': {
            opacity: '0%'
          },
          '100%':
          {
            opacity: '100%'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '100%'
          },
          '100%':
          {
            opacity: '0%'
          }
        }
      }
    },
    animation:
    {
      'fade-in': 'fade-in 1s',
      'fade-out': 'fade-out 1s'
    }
  },
  variants: [],
  plugins: [],
}

