/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000ffff",
        secondary: "#ffff00ff",
        thirty: "#ff0000ff",
        light: "#ECECEC"
      },

      fontFamily: {
        poppinsRegular: ['poppins-regular', 'sans-serif'],
        poppinsBlack: ['poppins-black', 'sans-serif'],
        poppinsBold: ['poppins-bold', 'sans-serif'],
        poppinsLight: ['poppins-light', 'sans-serif'],
        poppinsItalic : ['poppins-italic', 'sans-serif']

      }
    },
  },
  plugins: [],
}
