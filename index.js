var opts = require('babel-features').options();

// TODO: Keep dependencies in package.json in sync with possible transforms from babel-features.

opts.plugins = opts.plugins.map(function (plugin) {
  return require('babel-plugin-' + plugin.toLowerCase()); // A safety check till hax/babel-features#7 gets merged.
});

module.exports = opts;