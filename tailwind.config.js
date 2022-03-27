module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {   
      fontFamily: {
        jakarta: ['jakarta'],
      },
      colors: {
        'ocean-1': '#007FFF',
        'ocean-2': '#1e4976',
        'ocean-3': '#001e3c',
        'ocean-4': '#0a1929',
      },
    },
  },
  plugins: [],
}
// #0a1929 - dark
// #001e3c - less dark
// #1e4976 - border
// #007FFF - light blue