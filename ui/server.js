const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = next({})
const handle = app.getRequestHandler()
const port = process.env.PORT

const apiPaths = {
  '/backend': {
    target: process.env.BACKEND_URL,
    pathRewrite: {
      '^/backend': ''
    },
    changeOrigin: true
  }
}

app
  .prepare()
  .then(() => {
    const server = express()
    server.use('/backend', createProxyMiddleware(apiPaths['/backend']))

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('Error:::::', err)
  })
