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
      footerIcon:"#6f727f",
      footerBg: '#3E4153',
      hoverfb:"#3C5B9A",
      hovertwitter:"#28A9DF",
      hoveryoutube:"#E91C00",
      white:"#ffffff",
      borderColor:"#D2D3D7",
      formtext:"#6f727f",
    
    },
    backgroundImage: {
      'hoverinsta': 'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)',
    },
  },
  plugins: [],
}


