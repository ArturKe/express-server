const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ivan',
  password: '123',
  host: "localhost",
  port: 5432,
  table: 'mediumclone'
})

module.exports = pool