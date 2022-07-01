'use strict'

const app = require('./app.js'),
    server = app.listen(app.get('port'), () => {
        console.log(`Iniciando aplicación en el puerto ${app.get('port')}`);
    })

const { Client } = require('pg')
    //const config = require('./db_config.json')

const getAll = async() => {


    const client = new Client({
        /* user: config.postgresql.user,
        host: config.postgresql.host,
        database: config.postgresql.database,
        password: config.postgresql.pass,
        port: config.postgresql.port */
        user: "postgres",
        host: "localhost",
        database: "dmo_cargas",
        password: "Bocajuniors12",
        port: "5432"
    })
    await client.connect()

    const res = await client.query('SELECT * FROM usuarios')

    const result = res.rows

    await client.end()

    return result;
}

getAll().then((result) => {
    console.log(result);
})