/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      main: '#181A1F',
      grey: '#6D727D',
      light: '#ACB1BC',
      blue: '#0053E1',
      lightWhite: '#EEF4FF',
      focuced: '#E7E7E7',
      createButton: 'linear-gradient(180deg, #2D66F8 0%, #2A5EE6 52.08%, #2554CC 100%)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
