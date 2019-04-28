const router = require('koa-router')()
const { getAll } = require('../service/students')
const rest = require('../middleware/rest')

router.get('/getAll', async (ctx, next) => {
  const result = await getAll()
  ctx.body = rest.restify(result)
})

module.exports = router
