const { Pool }  = require('pg')
const devConfig =  require('../config/connect-dev')

const pool = new Pool({
  user: devConfig.user,
  host: devConfig.host,
  database: devConfig.database,
  password: devConfig.password,
  port: devConfig.port,
})

module.exports = pool;