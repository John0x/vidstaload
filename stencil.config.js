// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');

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
  globalStyle: 'src/global/app.css',
  copy: [
    { src: 'robots.txt' }
  ],
  plugins: [
    sass()
  ]
};
