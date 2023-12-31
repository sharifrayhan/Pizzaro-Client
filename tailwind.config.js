/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],

  theme: {
    extend: {
      fontFamily : {
        sigmar : 'Sigmar One', 
        poppins: 'Poppins', 
        antonio: 'Antonio',
      }
    },
  },
  
  plugins: [require("daisyui")],
}

