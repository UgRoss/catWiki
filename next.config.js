const withSass = require('@zeit/next-sass');
const tailwindCss = require('tailwindcss');

module.exports = withSass({
  webpack(config, options) {
    const rules = [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [tailwindCss('./tailwind.config.js')],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      },
    ];

    return {
      ...config,
      module: { ...config.module, rules: [...config.module.rules, ...rules] },
    };
  },
});
