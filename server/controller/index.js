const fs = require('fs')
const path = require('path')
const router = require('koa-router')()

// eslint-disable-next-line no-useless-escape
const rule = /^[^\.].*\.js$/

const files = fs.readdirSync(__dirname)

files
  .filter(file => ~file.search(rule))
  .forEach(file => {
    const fileName = file.substr(0, file.length - 3)
    const fileEntity = require(path.join(__dirname, file))
    if (fileName !== 'index') {
      router.use(
        `/${fileName}`,
        fileEntity.routes(),
        fileEntity.allowedMethods()
      )
    }
  })

module.exports = router
