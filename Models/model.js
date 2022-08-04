'use strict'

const conn = require('./API_connection'),
    API_Model = () => {};


API_Model.getAll = (cb) => {
    conn.query('SELECT * FROM usuarios', cb)
}

API_Model.logIn = (data, cb) => {
    //console.log(data);
    conn.query('SELECT email, password FROM usuarios WHERE email = $1 AND password = $2', [data.email, data.password], cb)

}

API_Model.getOne = (id, cb) => conn.query('SELECT * FROM usuarios WHERE email = $1', [id], cb)

API_Model.register = (data, cb) => {

    console.log(data); //probar poner el objeto asi --> [data], en vez de ponerlo de a uno
    conn.query('INSERT INTO usuarios (razon_social, cuit_cuil, tipo_persona, email, password) VALUES ($1, $2, $3, $4, $5)', [data.razon_social, data.cuit_cuil, data.tipo_persona, data.email, data.password], cb)
}

API_Model.close = () => conn.end()

module.exports = API_Model;