'use strict'

const conn = require('./API_connection'),
    API_Model = () => {};


//Registración de nuevo usuario
API_Model.register = (data, cb) => {
    //console.log(data); //probar poner el objeto asi --> [data], en vez de ponerlo de a uno. NO FUNCIONó
    conn.query('INSERT INTO usuarios (razon_social, cuit_cuil, email, password, tipo_usuario) VALUES ($1, $2, $3, $4, $5)', [data.razon_social, data.cuit_cuil, data.email, data.password, data.tipo_usuario], cb)
}

//Log In
API_Model.logIn = (data, cb) => {
    conn.query('SELECT cod_usuario, email, password FROM usuarios WHERE email = $1 AND password = $2', [data.email, data.password], cb)
}

//Actualizar datos del usuario
API_Model.update_profile = (data, cb) => {
    conn.query('UPDATE usuarios SET razon_social = $1, cuit_cuil = $2, email = $3, password = $4, fec_nacim = $5 WHERE email = $3', [data.razon_social, data.cuit_cuil, data.email, data.password, data.fec_nacim], cb)
}

//Obtener todos los datos de UN usuario
API_Model.getOne = (id, cb) => conn.query('SELECT * FROM usuarios WHERE cod_usuario = $1', [id], cb)

//Todos los tipos de camiones
API_Model.getAllTypeTruck = (cb) => {
    conn.query('SELECT * FROM tipos_camiones', cb)
}
API_Model.getOneTypeTruck = (id, cb) => conn.query('SELECT descripcion FROM tipos_camiones WHERE cod_tipo_camion = $1', [id], cb)

//Todos los tipos de carrocerias
API_Model.getCarroceria = (cb) => {
    conn.query('SELECT * FROM tipos_carrocerias', cb)
}
API_Model.getOneTipoCarroceria = (id, cb) => conn.query('SELECT descripcion FROM tipos_carrocerias WHERE cod_tipo_carroceria = $1', [id], cb)

//Agregar Camión
API_Model.add_truck = (data, cb) => {
    conn.query('INSERT INTO camiones (patente, marca, modelo, anio, cod_usuario, cod_tipo_camion, cod_tipo_carroceria) VALUES ($1, $2, $3, $4, $5, $6, $7)', [data.patente, data.marca, data.modelo, data.anio, data.cod_usuario, data.cod_tipo_camion, data.cod_tipo_carroceria], cb)
}

//Editar Camión
API_Model.getOneTruck = (patente, cb) => conn.query('SELECT * FROM camiones WHERE patente = $1', [patente], cb)
API_Model.updateTruck = (data, cb) => conn.query('UPDATE camiones SET patente = $1, marca = $2, modelo = $3, anio = $4, cod_usuario = $5, cod_tipo_camion = $6, cod_tipo_carroceria = $7 WHERE patente = $1', [data.patente, data.marca, data.modelo, data.anio, data.cod_usuario, data.cod_tipo_camion, data.cod_tipo_carroceria], cb)

//Eliminar Camión
API_Model.deleteTruck = (id, cb) => conn.query('DELETE FROM camiones WHERE patente = $1', [id], cb)

//Todos los camiones de un usuario
API_Model.getTrucksUser = (id, cb) => {
    conn.query('SELECT * FROM camiones WHERE cod_usuario = $1', [id], cb)
}

//Get para Tipo de Carga
API_Model.getAllTiposCarga = (cb) => {
    conn.query('SELECT * FROM tipos_cargas', cb)
}

API_Model.close = () => conn.end()

module.exports = API_Model;