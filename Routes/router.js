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

//Eliminar Camión
router.delete('/delete/:patente', API_Controller.deleteTruck)

//Editar Camión
router.get('/my_truck/:patente', API_Controller.getOneTruck);
router.put('/update_truck', upload.none(), API_Controller.updateTruck);

//Todos los camiones de un usuario
router.get('/getTrucksUser/:cod_usuario', API_Controller.getTrucksUser);

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

router.get('/getOneTipoCarga/:cod_tipo_carga', API_Controller.getOneTipoCarga);
router.get('/getOneTipoProducto/:cod_tipo_producto', API_Controller.getOneTipoProducto);
router.get('/getOneTipoEstado/:cod_estado', API_Controller.getOneTipoEstado);
router.get('/getOneCargaUser/:cod_carga', API_Controller.getOneCargaUser);

module.exports = router;