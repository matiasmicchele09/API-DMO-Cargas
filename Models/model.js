'use strict'

const conn = require('./API_connection'),
    API_Model = () => {};


API_Model.getAll = (cb) => {
    conn.query('SELECT * FROM usuarios', cb)
}

API_Model.getAllTruck = (cb) => {
    conn.query('SELECT * FROM tipos_camiones', cb)
}

API_Model.getCarroceria = (cb) => {
    conn.query('SELECT * FROM tipos_carrocerias', cb)
}

API_Model.logIn = (data, cb) => {
    //console.log(data);
    conn.query('SELECT cod_usuario, email, password FROM usuarios WHERE email = $1 AND password = $2', [data.email, data.password], cb)

}

API_Model.getOne = (id, cb) => conn.query('SELECT * FROM usuarios WHERE cod_usuario = $1', [id], cb)

API_Model.register = (data, cb) => {

    console.log(data); //probar poner el objeto asi --> [data], en vez de ponerlo de a uno. NO FUNCIONó
    conn.query('INSERT INTO usuarios (razon_social, cuit_cuil, email, password, tipo_usuario) VALUES ($1, $2, $3, $4, $5)', [data.razon_social, data.cuit_cuil, data.email, data.password, data.tipo_usuario], cb)
}

API_Model.update_profile = (data, cb) => {

    console.log(data);
    conn.query('UPDATE usuarios SET razon_social = $1, cuit_cuil = $2, email = $3, password = $4, fec_nacim = $5 WHERE email = $3', [data.razon_social, data.cuit_cuil, data.email, data.password, data.fec_nacim], cb)
}

API_Model.close = () => conn.end()

module.exports = API_Model;