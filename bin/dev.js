const nodemon = require('nodemon');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const [ clientConfig, serverConfig ] = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// Клиентская компиляция
// Для HMR
const hmrServer = express();

const clientCompiler = webpack(clientConfig);

hmrServer.use(webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: true,
    stats: 'errors-only'
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
}));

hmrServer.listen(3001, () => {
    console.log('HMR server successfully started')
});

// Серверная компиляция
const serverCompiler = webpack(serverConfig);

serverCompiler.run(err => {
    if (err) console.log('Something went wrong... Error: ' + err)

    serverCompiler.watch({}, err => {
        if (err) console.log('Something went wrong... Error: ' + err)
        else console.log('Compilation was successful!')
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client')
        ]
    });
});