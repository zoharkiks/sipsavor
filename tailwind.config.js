/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'trajan-regular':['Trajan Pro Regular','sans'],
      'trajan-bold':['Trajan Pro Bold','sans'],
      'roundhand-regular':['Roundhand-Regular','sans'],
      'roundhand-bold':['Roundhand-Bold','sans'],
      'general-regular':['General Sans Regular','sans'],
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
   
    extend: {
      padding:{
        'padding-nav':'var(--section-padding-small) var(--gap-padding) 1em var(--gap-padding)'
      },
    },
  },
  plugins: [],
}
