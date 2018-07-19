// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');
const postcss = require('@stencil/postcss');
const autoprefixer = require('autoprefixer');

exports.config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      }
    }
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.pcss',
  copy: [{ src: 'robots.txt' }],
  plugins: [
    postcss({
      plugins: [
        autoprefixer({
          browsers: ['last 6 versions'],
          cascade: false
        }),
        require('postcss-nested')
      ]
    })
  ]
};
