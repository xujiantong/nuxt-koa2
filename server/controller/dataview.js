const router = require('koa-router')()
const rest = require('../middleware/rest')
const cas = require('../config/cas')
const {
  listProductors,
  listConsumers,
  getResourceTotal,
  getRecordOverview,
  listInputOverview,
  listOutputOverview,
  getInterval
} = require('../service/dataview')

router.get('/listProductors', cas.block, async (ctx, next) => {
  const result = await listProductors()
  ctx.body = rest.restify(result)
})

router.get('/listConsumers', cas.block, async (ctx, next) => {
  const result = await listConsumers()
  ctx.body = rest.restify(result)
})

router.get('/getResourceTotal', cas.block, async (ctx, next) => {
  const result = await getResourceTotal()
  ctx.body = rest.restify(result)
})

router.get('/getRecordOverview', cas.block, async (ctx, next) => {
  const result = await getRecordOverview()
  ctx.body = rest.restify(result)
})

router.get('/listInputOverview', cas.block, async (ctx, next) => {
  const result = await listInputOverview()
  ctx.body = rest.restify(result)
})

router.get('/listOutputOverview', cas.block, async (ctx, next) => {
  const result = await listOutputOverview()
  ctx.body = rest.restify(result)
})

router.get('/getInterval', cas.block, async (ctx, next) => {
  const result = await getInterval()
  ctx.body = rest.restify(result)
})

module.exports = router
