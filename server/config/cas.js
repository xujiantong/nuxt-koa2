const Cas = require('koa2-cas')

// Create a new instance of CASAuthentication.
const cas = new Cas({
  cas_url: 'http://192.168.92.3:8080/cas-server',
  service_url: 'http://127.0.0.1:3000',
  cas_version: '2.0'
})

module.exports = cas
