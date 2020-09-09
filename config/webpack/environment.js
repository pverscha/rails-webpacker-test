const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const typescript = require('./loaders/typescript');
const webpack = require("webpack");

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('typescript', typescript);

// The unipept-web-components library contains some requires for electron, which are only required when it's being used
// in an electron-environment. We can thus safely ignore these here.
environment.plugins.prepend("IgnorePlugin", new webpack.IgnorePlugin({
    resourceRegExp: /^(electron|fs)/,
    contextRegExp: /.*/
}));

module.exports = environment
