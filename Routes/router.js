'use strict'

const API_Controller = require('../Controllers/controller'),
    multer = require('multer'),
    upload = multer(),
    express = require('express'),
    router = express.Router();

//router.get('/', API_Controller.getAll);

//upload.none() para cuando se envian FormData
//Registración
router.post('/register', upload.none(), API_Controller.register);
//Log In
router.post('/logIn', upload.none(), API_Controller.logIn);
//Profile
router.post('/update_profile', upload.none(), API_Controller.update_profile);

router.get('/dashboard/:cod_usuario', API_Controller.getOne);
router.get('/my_profile/:cod_usuario', API_Controller.getOne);

//Get para Tipo Camiones
router.get('/getTruck', API_Controller.getAllTruck);

//Get para Tipo Carroceria
router.get('/getCarroceria', API_Controller.getCarroceria);


module.exports = router;