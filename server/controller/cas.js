const router = require('koa-router')()
const cas = require('../config/cas')

router.get('/app', cas.bounce, ctx => {
  ctx.redirect('/table')
})
router.get('/authenticate', cas.bounce_redirect)

router.get('/user', cas.block, ctx => {
  ctx.body = {
    cas_user: ctx.session[cas.session_name]
  }
})

router.get('/logout', cas.logout)

module.exports = router
