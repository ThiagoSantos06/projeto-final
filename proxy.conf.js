module.exports = {
    "/api/**": {
      "target": 'http://localhost:8080',
      "secure": true,
      "pathRewrite": { "^/api": "" },
      "changeOrigin": true
    }
}