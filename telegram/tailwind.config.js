/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
   colors:{
     body:"#FAFAFA",
     input:"#F3F4F6",
     icons:"#8b8d92 ",
     logo:"#00C78B",
     text:"#B4B7BE",
  disc:"#1B012E",
   
   },
   height:{
   70:"70px",
   41:"40",
   151:"150px",
   300:"338px",
   100:"150px",
   91:"130px",
   96:"470px",
   },
   width:{
    250:"200px",
    91:"130px",
   },
   border:{
   1.5:"1px",
   },
   boxShadow:{
     "3xl":" 0 1px 2px 0 rgba(0,0,0,.05) "
   },
   screens:{
    'sm': '420px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
   },
   zIndex:{
    10000:"100000"
   },
   spacing:{
    22:"70px"
   },
   backgroundSize:{
    "500":"500px",
    "400":"400px",
    "300":"300px",
    "100":"200px"
   }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}