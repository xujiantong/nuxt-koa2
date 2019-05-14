const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const Session = require('koa-session')

const app = new Koa()

// Set up an Koa session, which is required for CASAuthentication.
app.keys = ['some secret hurr']
app.use(Session(app))

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Load router
  const routes = require('./controller/index')
  app.use(routes.routes(), routes.allowedMethods())

  // parse request body
  const bodyParser = require('koa-bodyparser')
  app.use(bodyParser())

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST)
  consola.ready({
    message: `Server listening on http://${process.env.SERVER_HOST}:${
      process.env.SERVER_PORT
    }`,
    badge: true
  })
}

start()
