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
      backgroundImage: {
        hero: "url('/HeroImagelg.png')",
      },
      maxHeight: {
        '44': '11rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
