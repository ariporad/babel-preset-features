var opts = require('babel-features').options();

opts.plugins = opts.plugins.map(function (plugin) {
  return require('babel-plugin-' + plugin.toLowerCase()); // A safety check till hax/babel-features#7 gets merged.
});

module.exports = opts;