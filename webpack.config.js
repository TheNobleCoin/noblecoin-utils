'use strict';

module.exports = {
    mode: 'production',
    entry: './dist/index.js',
    output: {
        filename: 'NobleCoinUtils.js',
        library: 'NobleCoinUtils',
        libraryTarget: 'umd'
    },
    node: {
        fs: 'empty'
    },
    target: 'web'
};
