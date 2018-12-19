const path = require('path');
const rootPath = path.join(__dirname, '../');

function getConf() {
  const r = { prject: 'demo', env: 'development' };
  const s = process.env.NODE_ENV;
  console.log('getConf:' + s);

  if (!s) { return r; }

  const [env, prject] = s.split(/\,|\，/);

  if (env) { r.env = env; }
  if (prject) { r.prject = prject; }

  return r;
}

const { prject, env } = getConf();

const config = {
  env, // 环境
  prject, // 项目名字
  rootPath, // 根目录
  outputHtmlFileName: 'index.html', // 输出html文件名
  entryMainJS: rootPath + 'src/' + prject + '/index.js', // 主要js文件
  entryHtmlFile: rootPath + 'src/' + prject + '/index.html', // 主要html模板
  outputPath: rootPath + 'dist/' + prject, // 输出路径

  commonModule: ['vue', 'vue-router'], // 公共模块
  loadModule: ['index', 'commons', 'runtime'], // 加载模块js
};

module.exports = config;