const router = require('koa-router')()
const { getAll, updateScore } = require('../service/students')
const rest = require('../middleware/rest')

router.get('/getAll', async ctx => {
  const result = await getAll()
  ctx.body = rest.restify(result)
})
router.put('/updateScore', async ctx => {
  // eslint-disable-next-line no-console
  console.log(ctx.request)
  const result = await updateScore(ctx.request)
  ctx.body = rest.restify(result)
})

module.exports = router
