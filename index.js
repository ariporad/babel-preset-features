var opts = require('babel-features').options();

// TODO: Keep dependencies in package.json in sync with possible transforms from babel-features.

opts.plugins = opts.plugins.map(function (plugin) {
  if (typeof plugin === 'string') {
    return require('babel-plugin-' + plugin.toLowerCase()); // A safety check till hax/babel-features#7 gets merged.
  } else {  // Array here!!
    return [require('babel-plugin-' + plugin[0].toLowerCase())].concat(plugin.slice(1));
  }
});

module.exports = opts;