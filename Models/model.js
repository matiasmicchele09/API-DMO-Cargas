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
    conn.query('UPDATE usuarios SET razon_social = $1, cuit_cuil = $2, email = $3, password = $4, fec_nacim = $5 WHERE cod_usuario = $6', [data.razon_social, data.cuit_cuil, data.email, data.password, data.fec_nacim, data.cod_usuario], cb)
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
    conn.query('INSERT INTO camiones (patente_camion, marca, modelo, anio, cod_usuario, cod_tipo_camion) VALUES ($1, $2, $3, $4, $5, $6)', [data.patente_camion, data.marca, data.modelo, data.anio, data.cod_usuario, data.cod_tipo_camion], cb)
}

//Editar Camión
API_Model.getOneTruck = (patente, cb) => conn.query('SELECT * FROM camiones WHERE patente_camion = $1', [patente], cb)
API_Model.updateTruck = (data, cb) => conn.query('UPDATE camiones SET patente_camion = $1, marca = $2, modelo = $3, anio = $4, cod_tipo_camion = $5 WHERE patente_camion = $1', [data.patente_camion, data.marca, data.modelo, data.anio, data.cod_tipo_camion], cb)

//Eliminar Camión
API_Model.deleteTruck = (id, cb) => conn.query('DELETE FROM camiones WHERE patente_camion = $1', [id], cb)

//Agregar Carrocería
API_Model.add_carroceria = (data, cb) => {
    conn.query('INSERT INTO carrocerias (patente_carroceria, cant_ejes, anio, cod_usuario, cod_tipo_carroceria) VALUES ($1, $2, $3, $4, $5)', [data.patente_carroceria, data.cant_ejes, data.anio, data.cod_usuario, data.cod_tipo_carroceria], cb)
}

//Editar Carrocería
API_Model.getOneCarroceria = (patente_carroceria, cb) => conn.query('SELECT * FROM carrocerias WHERE patente_carroceria = $1', [patente_carroceria], cb)
API_Model.updateCarroceria = (data, cb) => conn.query('UPDATE carrocerias SET patente_carroceria = $1, cant_ejes = $2, anio = $3, cod_tipo_carroceria = $4 WHERE patente_carroceria = $1', [data.patente_carroceria, data.cant_ejes, data.anio, data.cod_tipo_carroceria], cb)

//Eliminar Carrocería
API_Model.deleteCarroceria = (id, cb) => conn.query('DELETE FROM carrocerias WHERE patente_carroceria = $1', [id], cb)

//Todos los camiones de un usuario
API_Model.getTrucksUser = (id, cb) => {
        conn.query('SELECT * FROM camiones WHERE cod_usuario = $1', [id], cb)
    }
    //Todos las carrocerías de un usuario
API_Model.getCarroceriasUser = (id, cb) => {
    conn.query('SELECT * FROM carrocerias WHERE cod_usuario = $1', [id], cb)
}

//Get para Tipo de Carga
API_Model.getAllTiposCarga = (cb) => {
    conn.query('SELECT * FROM tipos_cargas', cb)
}

//Get para Tipo Producto
API_Model.getAllTiposProducto = (id, cb) => {
    conn.query('SELECT * FROM tipos_productos WHERE cod_tipo_carga = $1', [id], cb)
}

//Get Estado Carga: Publicada
API_Model.getOneEstadoCarga = (id, cb) => conn.query('SELECT * FROM estados_carga WHERE cod_estado_carga = $1', [id], cb)

//Agregar Carga
API_Model.add_freight = (data, cb) => {
    conn.query('INSERT INTO cargas (cod_usuario, cod_tipo_carga, req_refrigeracion, es_carga_peligrosa, es_carga_apilable, cod_tipo_producto, cant_unit, peso_unit_kg, peso_total_kg, largo_mts, ancho_mts, alto_mts, peso_unit_tn, peso_total_tn, cant_litros, cod_estado_carga, ciudad_origen, ciudad_destino, fec_retiro, hora_retiro, fec_destino, hora_destino, comentario, domicilio_origen, domicilio_destino, prov_origen, prov_destino, receptor_carga) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)', [data.cod_usuario, data.cod_tipo_carga, data.req_refrigeracion, data.es_carga_peligrosa, data.es_carga_apilable, data.cod_tipo_producto, data.cant_unit, data.peso_unit_kg, data.peso_total_kg, data.largo_mts, data.ancho_mts, data.alto_mts, data.peso_unit_tn, data.peso_total_tn, data.cant_litros, data.cod_estado_carga, data.ciudad_origen, data.ciudad_destino, data.fec_retiro, data.hora_retiro, data.fec_destino, data.hora_destino, data.comentario, data.domicilio_origen, data.domicilio_destino, data.prov_origen, data.prov_destino, data.receptor_carga], cb)
}

//Todos las cargas de un usuario
API_Model.getCargasUser = (id, cb) => {
    conn.query('SELECT * FROM cargas WHERE cod_usuario = $1', [id], cb)
}

//Get One Tipo de Carga
API_Model.getOneTipoCarga = (id, cb) => conn.query('SELECT descripcion FROM tipos_cargas WHERE cod_tipo_carga = $1', [id], cb)

//Get One Tipo de Producto
API_Model.getOneTipoProducto = (id, cb) => conn.query('SELECT descripcion FROM tipos_productos WHERE cod_tipo_producto = $1', [id], cb)

//Get One Tipo de Estado
API_Model.getOneTipoEstado = (id, cb) => conn.query('SELECT * FROM estados_carga WHERE cod_estado_carga = $1', [id], cb)

//Get One Carga de un Usuario
API_Model.getOneCargaUser = (id, cb) => conn.query('SELECT * FROM cargas WHERE cod_carga = $1', [id], cb)

//Eliminar Carga
API_Model.deleteCarga = (id, cb) => conn.query('DELETE FROM cargas WHERE cod_carga = $1', [id], cb)

//Actualizar una Carga
API_Model.updateCarga = (data, cb) => conn.query('UPDATE cargas SET cod_carga = $1, req_refrigeracion = $2, es_carga_peligrosa = $3, es_carga_apilable = $4, cod_tipo_producto = $5, cant_unit = $6, peso_unit_kg = $7, peso_total_kg = $8, largo_mts = $9, ancho_mts = $10, alto_mts = $11, peso_unit_tn = $12, peso_total_tn = $13, cant_litros = $14, ciudad_origen = $15, ciudad_destino = $16, fec_retiro = $17, hora_retiro = $18, fec_destino = $19, hora_destino = $20, comentario = $21, domicilio_origen = $22, domicilio_destino = $23, prov_origen = $24, prov_destino = $25, receptor_carga = $26 WHERE cod_carga = $1', [data.cod_carga, data.req_refrigeracion, data.es_carga_peligrosa, data.es_carga_apilable, data.cod_tipo_producto, data.cant_unit, data.peso_unit_kg, data.peso_total_kg, data.largo_mts, data.ancho_mts, data.alto_mts, data.peso_unit_tn, data.peso_total_tn, data.cant_litros, data.ciudad_origen, data.ciudad_destino, data.fec_retiro, data.hora_retiro, data.fec_destino, data.hora_destino, data.comentario, data.domicilio_origen, data.domicilio_destino, data.prov_origen, data.prov_destino, data.receptor_carga], cb)

//GetAll cargas para poder ver que provincias tienen o no cargas
API_Model.getAllCargas = (cb) => conn.query('SELECT * FROM cargas', cb)

//Buscar Cargas
API_Model.getAllCargasProvincia = (nombre_provincia, cb) => conn.query('SELECT * FROM cargas WHERE prov_origen = $1', [nombre_provincia], cb)

//Confirmar Solicitud de Carga
API_Model.confirm_request = (data, cb) => {
    conn.query('INSERT INTO solicitudes (cod_estado_solicitud, cod_usuario_transp, cod_carga, fec_solicitud, patente_camion, patente_carroceria) VALUES ($1, $2, $3, $4, $5, $6)', [data.cod_estado_solicitud, data.cod_usuario_transp, data.cod_carga, data.fec_solicitud, data.patente_camion, data.patente_carroceria], cb)
}

//Solicitudes
API_Model.getUserRequest = (id, cb) => {
    conn.query('SELECT * FROM solicitudes WHERE cod_usuario_transp = $1', [id], cb)
}

//Get One Tipo de Estado Solicitud
API_Model.getTipoEstadoSolicitud = (id, cb) => conn.query('SELECT * FROM estados_solicitud WHERE cod_estado_solicitud = $1', [id], cb)

//Get One Tipo Producto
API_Model.getOneTipoProducto = (id, cb) => conn.query('SELECT descripcion FROM tipos_productos WHERE cod_tipo_producto = $1', [id], cb)

//Get para poner el dador de carga en la card
API_Model.getNameUser = (id, cb) => conn.query('SELECT razon_social, cuit_cuil FROM usuarios WHERE cod_usuario = $1', [id], cb)

//Actualizar estado de una Carga
API_Model.updateEstadoCarga = (data, cb) => conn.query('UPDATE cargas SET cod_estado_carga = $2 WHERE cod_carga = $1', [data.codigo_carga, data.cod_estado_carga], cb)

//Get One Solicitud
API_Model.getOneSolicitud = (id, cb) => conn.query('SELECT * FROM solicitudes WHERE cod_solicitud = $1', [id], cb);

//Cargas Solicitadas - Para Dador de Carg
API_Model.getFreightsRequest = (id, cb) => {
    conn.query('SELECT * FROM solicitudes WHERE cod_carga = $1', [id], cb)
}

//Actualizar estado de una Solicitud
API_Model.updateEstadoSolicitud = (data, cb) => conn.query('UPDATE solicitudes SET cod_estado_solicitud = $2, fec_cambio_estado = $3 WHERE cod_carga = $1', [data.codigo_carga, data.cod_estado_solicitud, data.fec_cambio_estado], cb)

//Subida de archivos
API_Model.uploadFiles = (data, cb) => {
    conn.query('INSERT INTO solicitudes_archivos (cod_solicitud, nombre_archivo) VALUES ($1, $2)', [data.cod_solicitud, data.file_name], cb)
}

//Get nombre archivo
API_Model.getNameFile = (id, cb) => conn.query('SELECT nombre_archivo FROM solicitudes_archivos WHERE cod_solicitud = $1', [id], cb);

API_Model.close = () => conn.end()

module.exports = API_Model;