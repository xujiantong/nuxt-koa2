const Cas = require('koa2-cas')
// Create a new instance of CASAuthentication.
const cas = new Cas({
  cas_url: process.env.CAS_URL,
  service_url: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  cas_version: process.env.CAS_VERSION
})

module.exports = cas
