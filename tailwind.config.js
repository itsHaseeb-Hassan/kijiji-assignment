/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      larsseit: ['Larsseit', 'sans-serif'],
    },
    colors:{
      primary:"#EBEBED",
      secondary:"#90d3a6",
      postbtn:"#4B4881",
      trendingbtn:"F8AA17",
      heroBg:"#373373",
      headingHero:"#37A864",
      bodyBg:"#F8F9F9",
      footerHeading:"#c5c6cb",
      footerBg: '#3E4153'
    }
  },
  plugins: [],
}


