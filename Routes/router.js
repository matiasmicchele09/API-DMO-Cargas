'use strict'

const API_Controller = require('../Controllers/controller'),
    multer = require('multer'),
    upload = multer(),
    express = require('express'),
    router = express.Router();



//router.get('/', API_Controller.getAll);

//Registración
router.post('/register', upload.none(), API_Controller.insert);

//Autenticación
router.post('/logIn', upload.none(), API_Controller.authentication);

//Autenticación para las demás páginas
router.get('/user-page', API_Controller.auth_pages)

//Log Out
router.get('/logOut', API_Controller.logOut)


module.exports = router;