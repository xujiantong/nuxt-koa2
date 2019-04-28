const { query } = require('../config/db')
module.exports = {
  async getAll() {
    const sql = `SELECT
    s.id sid,
    s.NAME sname,
    c.NAME cname,
    s.gender gender,
    s.score score 
  FROM
    students s
    INNER JOIN classes c ON s.class_id = c.id`
    const result = await query(sql)
    return result
  },
  async update(info) {
    const sql = ``
    const result = await query(sql)
    return result
  },
  async insert(info) {
    const sql = ``
    const result = await query(sql)
    return result
  }
}
