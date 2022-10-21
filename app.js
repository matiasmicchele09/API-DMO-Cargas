'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    fileUpload = require('express-fileupload'),
    //mercadopago = require("mercadopago"),
    routes = require('./Routes/router'),
    port = (process.env.PORT || 3000),
    app = express();

//Configurando la app
app.set('port', port)

// Agrega credenciales -Cambiar el access_token de test por el de produccion para poder cobrar en la aplicación.

//Ejecutando Middlewares
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cors())
    .use(fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
        createParentPath: true,
    }))
    .use(express.json());

/* mercadopago.configure({
    access_token: "TEST-2384579572312936-102011-f2d63a0ca1cf795b63705995b23716fc-306506163"
}); */

//Rutas, es como que yo importo el módulo de rutas
//el middleware termina siendo un conjunto de funciones. Lo cual no me parece mal
app.use(routes)

module.exports = app;