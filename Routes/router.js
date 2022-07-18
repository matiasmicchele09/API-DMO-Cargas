'use strict'

const API_Controller = require('../Controllers/controller'),
    multer = require('multer'),
    upload = multer(),
    express = require('express'),
    router = express.Router();



router.get('/', API_Controller.getAll);
router.post('/signUp', upload.none(), API_Controller.insert);

module.exports = router;