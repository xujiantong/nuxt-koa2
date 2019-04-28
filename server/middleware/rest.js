module.exports = {
  APIError: function(code, message) {
    this.code = code || 'internal:unknown_error'
    this.message = message || ''
  },
  restify: function(data) {
    return {
      code: 200,
      msg: '成功',
      data: data
    }
  }
}
