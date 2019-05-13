const router = require('koa-router')()
const { getAll, updateScore } = require('../service/students')
const rest = require('../middleware/rest')
const cas = require('../config/cas')

router.get('/getAll', cas.block, async (ctx, next) => {
  const result = await getAll()
  ctx.body = rest.restify(result)
})
router.put('/updateScore', cas.block, async (ctx, next) => {
  // eslint-disable-next-line no-console
  console.log(ctx.request)
  const result = await updateScore(ctx.request)
  ctx.body = rest.restify(result)
})

module.exports = router
