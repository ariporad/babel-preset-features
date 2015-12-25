var opts = require('babel-features').options();

opts.plugins = opts.plugins.map(function (plugin) {
  return require('babel-plugin-' + plugin);
});

module.exports = opts;