'use strict';

module.exports = {
  client: {
    source: ['src/**/*.{html,css,ico,json}', '!**/app/**'],
    destination: '../backend/src/main/webapp/',
    app: ['src/**/*.js']
  },
  general: {
    source: ['package.json', 'Procfile'],
    destination: 'out'
  },
  liveReload: {
    port: 35729
  },
  build: {
    destination: '../backend/src/main/webapp/'
  }
};
