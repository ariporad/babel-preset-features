var opts = require('babel-features').options();

opts.plugins = opts.plugins.map(require);

module.exports = opts;