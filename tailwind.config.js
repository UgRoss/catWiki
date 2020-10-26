module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fill: {
        white: '#fff',
      },
      backgroundColor: {
        browny: '#E3E1DC',
      },
    },
  },
  variants: {},
  plugins: [],
};
