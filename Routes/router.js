'use strict'

const API_Controller = require('../Controllers/controller'),
    API_Model = require('../Models/model'),
    multer = require('multer'),
    upload = multer(),
    express = require('express'),
    mercadopago = require("mercadopago"),
    router = express.Router();

mercadopago.configure({
    access_token: "TEST-2384579572312936-102011-f2d63a0ca1cf795b63705995b23716fc-306506163"
});

//upload.none() para cuando se envian FormData
/* POR ALGUNA EXTRAÑA RAZON QUE TENGO QUE AVERIGUAR... AL INSTALAR LA LIBRERÍA DE UPLOAD COMO QUE ME ROMPIÓ LA DEL MULTER, PARA SUBIR
LOS FORMDATA, como que ahora no necesitan a multer */

//Registración
router.post('/register' /* , upload.none() */ , API_Controller.register);

//Log In
router.post('/logIn', API_Controller.logIn);

//Perfil
router.post('/update_profile' /* , upload.none() */ , API_Controller.update_profile);
router.post('/update_cuenta' /* , upload.none() */ , API_Controller.update_cuenta);
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
router.post('/add_truck', API_Controller.add_truck);

//Editar Camión
router.get('/my_truck/:patente', API_Controller.getOneTruck);
router.put('/update_truck', /*  upload.none(), */ API_Controller.updateTruck);

//Eliminar Camión
router.delete('/delete_camion/:patente_camion', API_Controller.deleteTruck);

//Agregar Carroceria
router.post('/add_carroceria', /* upload.none(), */ API_Controller.add_carroceria);

//Editar Carrocería
router.get('/mi_carroceria/:patente_carroceria', API_Controller.getOneCarroceria);
router.put('/update_carroceria', /* upload.none(), */ API_Controller.updateCarroceria);

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
router.post('/add_freight', /* upload.none(), */ API_Controller.add_freight);

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
router.put('/update_carga', /*  upload.none(), */ API_Controller.updateCarga);

//GetAll cargas para poder ver que provincias tienen o no cargas
router.get('/getAllCargas', API_Controller.getAllCargas);

//Buscar Cargas
router.get('/searchCarga/:nombre_provincia', API_Controller.getAllCargasProvincia);

//Confirmar Solicitud de Carga
router.post('/confirm_request' /* , upload.none() */ , API_Controller.confirm_request);

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
router.get('/getOneSolicitud/:cod_solicitud', API_Controller.getOneSolicitud);

//Cargas Solicitadas - Para Dador de Carga
router.get('/getFreightsRequest/:cod_carga', API_Controller.getFreightsRequest);

//Actualizar estado de una Solicitud
router.put('/updateEstadoSolicitud', API_Controller.updateEstadoSolicitud);

router.put('/uploadFileRequest', API_Controller.uploadFileRequest);
router.put('/uploadFileFinViaje', API_Controller.uploadFileFinViaje);

//Subida de archivos
//router.post('/uploadFiles/:cod_solicitud', API_Controller.uploadFiles);
router.post('/uploadFiles', API_Controller.uploadFiles);

//Subida de archivos (img)
router.post('/uploadImages', API_Controller.uploadImages);

//Get nombre archivo 
router.get('/getNameFile/:cod_solicitud', API_Controller.getNameFile);

//Descarga de arhivos
router.get('/downloadFile/:nombre_archivo', API_Controller.downloadFile);

//Descargar Imagen
router.get('/downloadImg/:nombre_archivo', API_Controller.downloadImg);

//Pago con MercadoPago
router.post('/payWithMP', async(req, res) => {
    const obj = Object.assign({}, req.body);
    console.log(obj);
    let solicitud = obj.descripcion.split("-")[0].trim()
    console.log(solicitud)
    let preference = {
        items: [{
            title: obj.descripcion,
            unit_price: obj.valor_carga,
            quantity: obj.cantidad,
        }],
        back_urls: {
            "success": `http://localhost:3000/feedback/${solicitud}`,
            "failure": `http://localhost:3000/feedback/${solicitud}`,
            "pending": `http://localhost:3000/feedback/${solicitud}`
        },
        auto_return: "approved",
    }
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
    res.send({ preferenceId })
});

router.get('/feedback/:solicitud', function(req, res) {
    let solicitud = req.params.solicitud;
    console.log(solicitud);
    console.log("Query", req.query);
    let obj = {
        Request: solicitud,
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    }

    //return res.json(obj);       

    /* res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    }); */

    API_Model.add_pay(obj, (err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo agregar el Pago. ${err}`
            })
        } else {
            res.sendStatus(200);
            //return res.json(obj);       
        }
    })


});



router.post("/create_preference", (req, res) => {
    const obj = Object.assign({}, req.body);
    console.log(obj);

    let preference = {
        items: [{
            descripcion: obj.descripcion,
            valor_carga: obj.valor_carga,
            cantidad: obj.cantidad,
        }]

        /* let preference = {
            items: [{
                title: req.body.descripcion,
                unit_price: Number(req.body.valor_carga),
                quantity: Number(req.body.cantidad),
            }] */

        /*, back_urls: {
            "success": "http://localhost:5000/feedback",
            "failure": "http://localhost:5000/feedback",
            "pending": "http://localhost:5000/feedback"
        },
        auto_return: "approved", */
    };

    mercadopago.preferences.create(preference)
        .then(function(response) {
            res.json({
                id: response.body.id
            });
        }).catch(function(error) {
            console.log(error);
        });
});


//Consultar Estado del Pago
router.get('/getPay/:cod_solicitud', API_Controller.getPay);

module.exports = router;