const router = require('koa-router')()
const rest = require('../middleware/rest')
const {
  listProductors,
  listConsumers,
  getResourceTotal,
  getRecordOverview,
  listInputOverview,
  listOutputOverview,
  getInterval
} = require('../service/dataview')

router.get('/listProductors', async ctx => {
  const result = await listProductors()
  ctx.body = rest.restify(result)
})

router.get('/listConsumers', async ctx => {
  const result = await listConsumers()
  ctx.body = rest.restify(result)
})

router.get('/getResourceTotal', async ctx => {
  const result = await getResourceTotal()
  ctx.body = rest.restify(result)
})

router.get('/getRecordOverview', async ctx => {
  const result = await getRecordOverview()
  ctx.body = rest.restify(result)
})

router.get('/listInputOverview', async ctx => {
  const result = await listInputOverview()
  ctx.body = rest.restify(result)
})

router.get('/listOutputOverview', async ctx => {
  const result = await listOutputOverview()
  ctx.body = rest.restify(result)
})

router.get('/getInterval', async ctx => {
  const result = await getInterval()
  ctx.body = rest.restify(result)
})

module.exports = router
