'use strict'

const API_Controller = require('../Controllers/controller'),
    multer = require('multer'),
    upload = multer(),
    express = require('express'),
    router = express.Router();

//router.get('/', API_Controller.getAll);

//Registración
router.post('/register', upload.none(), API_Controller.register);

//Log In
router.post('/logIn', upload.none(), API_Controller.logIn);

router.get('/dashboard/:email', API_Controller.getOne)
router.get('/my_profile/:email', API_Controller.getOne)

module.exports = router;