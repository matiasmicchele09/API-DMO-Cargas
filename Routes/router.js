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
module.exports = router;