module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    float: false,
    accessibility: false,
    backgroundClip: false,
    fontVariantNumeric: false,
    gradientColorStops: false,
    objectPosition: false,
    overscrollBehavior: false,
    placeholderColor: false,
    placeItems: false,
    placeSelf: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    rotate: false,
    scale: false,
    skew: false,
    tableLayout: false,
    transformOrigin: false,
  },
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
        44: '11rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
