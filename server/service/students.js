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
  async updateScore(info) {
    const sql = `UPDATE students SET score=${info.score} where name=${
      info.name
    };`
    const result = await query(sql)
    return result
  }
}
