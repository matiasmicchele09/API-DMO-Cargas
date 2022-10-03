'use strict'

const API_Controller = require('../Controllers/controller'),
    multer = require('multer'),
    upload = multer(),
    express = require('express'),
    router = express.Router();

//upload.none() para cuando se envian FormData

//Registración
router.post('/register', upload.none(), API_Controller.register);

//Log In
router.post('/logIn', upload.none(), API_Controller.logIn);

//Perfil
router.post('/update_profile', upload.none(), API_Controller.update_profile);
router.get('/dashboard/:cod_usuario', API_Controller.getOne);
router.get('/my_profile/:cod_usuario', API_Controller.getOne);

/* --------------------------------------- TRANSPORTISTAS --------------------------------------- */
//Get para Tipo Camiones
router.get('/getAllTypeTruck', API_Controller.getAllTypeTruck);
router.get('/getOneTypeTruck/:cod_tipo_camion', API_Controller.getOneTypeTruck);

//Get para Tipo Carroceria
router.get('/getCarroceria', API_Controller.getCarroceria);
router.get('/getOneTipoCarroceria/:cod_tipo_carroceria', API_Controller.getOneTipoCarroceria);

//Agregar Camión
router.post('/add_truck', upload.none(), API_Controller.add_truck);

//Editar Camión
router.get('/my_truck/:patente', API_Controller.getOneTruck);
router.put('/update_truck', upload.none(), API_Controller.updateTruck);

//Eliminar Camión
router.delete('/delete_camion/:patente_camion', API_Controller.deleteTruck);

//Agregar Carroceria
router.post('/add_carroceria', upload.none(), API_Controller.add_carroceria);

//Editar Carrocería
router.get('/mi_carroceria/:patente_carroceria', API_Controller.getOneCarroceria);
router.put('/update_carroceria', upload.none(), API_Controller.updateCarroceria);

//Eliminar Carroceria
router.delete('/delete_carroceria/:patente_carroceria', API_Controller.deleteCarroceria);

//Todos los camiones de un usuario
router.get('/getTrucksUser/:cod_usuario', API_Controller.getTrucksUser);

//Todos las carrocerías de un usuario
router.get('/getCarroceriasUser/:cod_usuario', API_Controller.getCarroceriasUser);

/* --------------------------------------- DADORES DE CARGA --------------------------------------- */
//Get para Tipo de Carga
router.get('/getAllTiposCargas', API_Controller.getAllTiposCarga);

//Get para Tipo Producto
router.get('/getAllTiposProducto/:tipo_carga', API_Controller.getAllTiposProducto);

//Get Estado Carga: Publicada
router.get('/getOneEstadoCarga/:cod_estado', API_Controller.getOneEstadoCarga);

//Agregar Carga
router.post('/add_freight', upload.none(), API_Controller.add_freight);

//Todos las cargas de un usuario
router.get('/getCargasUser/:cod_usuario', API_Controller.getCargasUser);

//Get One Tipo de Carga
router.get('/getOneTipoCarga/:cod_tipo_carga', API_Controller.getOneTipoCarga);

//Get One Tipo de Producto
router.get('/getOneTipoProducto/:cod_tipo_producto', API_Controller.getOneTipoProducto);

//Get One Tipo de Estado
router.get('/getOneTipoEstado/:cod_estado', API_Controller.getOneTipoEstado);

//Get One Carga de un Usuario
router.get('/getOneCargaUser/:cod_carga', API_Controller.getOneCargaUser);

//Eliminar una Carga
router.delete('/delete_carga/:cod_carga', API_Controller.deleteCarga);

//Actualizar una Carga
router.put('/update_carga', upload.none(), API_Controller.updateCarga);

//GetAll cargas para poder ver que provincias tienen o no cargas
router.get('/getAllCargas', API_Controller.getAllCargas);

//Buscar Cargas
router.get('/searchCarga/:nombre_provincia', API_Controller.getAllCargasProvincia);

//Confirmar Solicitud de Carga
router.post('/confirm_request', upload.none(), API_Controller.confirm_request);

//Solicitudes
router.get('/getUserRequest/:cod_usuario', API_Controller.getUserRequest);

//Get One Tipo de Estado Solicitud
router.get('/getTipoEstadoSolicitud/:cod_estado', API_Controller.getTipoEstadoSolicitud);

//Get One Tipo Producto
router.get('/getOneTipoProducto/:cod_tipo_producto', API_Controller.getOneTipoProducto);

//Get para poner el dador de carga en la card
router.get('/getNameUser/:cod_usuario', API_Controller.getNameUser);

//Actualizar estado de una Carga
router.put('/updateEstadoCarga', API_Controller.updateEstadoCarga);

//Get One Solicitud
router.get('/getOneSolicitud/:cod_solitud', API_Controller.getOneSolicitud);

module.exports = router;