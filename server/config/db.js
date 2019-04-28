const mysql = require('mysql')
const pool = mysql.createPool({
  host: '192.168.22.88',
  user: 'root',
  password: 'china2010',
  database: 'test'
})

const query = function(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }
