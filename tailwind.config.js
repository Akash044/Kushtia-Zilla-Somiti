module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens:{
      'smMxW': {'max': '639px'},
      'md': '768px',
      'sm': '640px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
