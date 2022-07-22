'use strict'

const conn = require('./API_connection'),
    API_Model = () => {};


API_Model.getAll = (cb) => {
    conn.query('SELECT * FROM usuarios', cb)
}

API_Model.select = (data, cb) => {
    //console.log(data);
    conn.query('SELECT razon_social FROM usuarios WHERE email = $1 AND password = $2', [data.email, data.password], cb)

}

API_Model.insert = (data, cb) => {
    console.log("en el modelo");
    console.log(data);
    conn.query('INSERT INTO usuarios (razon_social, cuit_cuil, tipo_persona, email, password) VALUES ($1, $2, $3, $4, $5)', [data.razon_social, data.cuit_cuil, data.tipo_persona, data.email, data.password], cb)
}

API_Model.close = () => conn.end()

module.exports = API_Model;