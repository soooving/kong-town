// src/main/kongfront/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://192.168.10.36:8080',
            changeOrigin: true,
        })
    )
};