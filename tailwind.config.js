/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    },
    extend: {
      colors: {
        "color-primary": "#222831",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#2dd4bf",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      },
      animation: {
        typing: "typing 2s steps(25) infinite alternate, blink .7s infinite",
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        wiggle: {
          '0%, 100%': {
              transform: 'rotate(-15deg)'
          },
          '50%': {
              transform: 'rotate(15deg)'
          },
      },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
    },
  },
  plugins: [],
}

