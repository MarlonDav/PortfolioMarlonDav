/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  
  theme: {
    extend: {
      fontFamily:{
        mont:['var(--font-mont)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 5px,#000 100px);',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 80px);',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 5px,#000 80px);',
        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 60px);',
        circularDarkMd: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 5px,#000 60px);',
        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 40px);',
        circularDarkSm: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 5px,#000 40px);',

      }
    },
    screens:{
      "2xl":{max:"1535px"},
      xl:{max:"1279px"},
      lg:{max:"1023px"},
      md:{max:"767px"},
      sm:{max:"640px"},
      xs:{max:"479px"},

    },
  },
  plugins: [],
}
