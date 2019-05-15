const router = require('koa-router')()
const rest = require('../middleware/rest')
const cas = require('../config/cas')

router.get('/user', ctx => {
  const result = {
    cas_user: ctx.session[cas.session_name]
  }
  ctx.body = rest.restify(result)
})
router.get('/logout', cas.logout)
module.exports = router
