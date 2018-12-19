var path = require('path');
var rootPath = path.join(__dirname, '../');

module.exports = {
  rootPath,
  outputHtmlFileName: 'index.html',
  index: rootPath + 'src/demo/index.js',
  entryHtmlFile: rootPath + 'src/demo/index.html',
  outputPath: rootPath + 'dist/',

  commonModule: ['vue', 'vue-router'],
  loadModule: ['index', 'commons', 'runtime'],
}