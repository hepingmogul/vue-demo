var path = require('path');
var rootPath = path.join(__dirname, '../');

module.exports = {
  rootPath,

  index: rootPath + 'src/index.js',
  html: rootPath + 'src/index.html',
  outputPath: rootPath + 'dist/',

  commonModule: ['vue', 'vue-router'],
  loadModule: ['index', 'commons', 'runtime'],
};