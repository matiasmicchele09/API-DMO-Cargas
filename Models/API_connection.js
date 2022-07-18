 const { Client } = require('pg')
 const config = require('./db_config.json')

 const connection = new Client({
     user: config.postgresql.user,
     host: config.postgresql.host,
     database: config.postgresql.database,
     password: config.postgresql.pass,
     port: config.postgresql.port
 })

 connection.connect();


 module.exports = connection;