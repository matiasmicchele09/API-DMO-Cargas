const { Client } = require('pg')

const client = new Client()
await client.connect()

const res = await client.query('SELECT * FROM usuarios')

console.log(res.rows[0].message) // Hello world!
await client.end()