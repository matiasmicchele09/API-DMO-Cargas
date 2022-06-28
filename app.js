'use strict'

const express = require('express'),
    //favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    //routes = require(),
    //faviconURL = `${__dirname}` CREAR/BUSCAR UN FAVICON - NO CREO SEA NECESARIO, TOTAL NO USO EL BACK COMO FRONT PARA PONER FAVICON
    port = (process.env.PORT || 3000),
    app = express();

//Configurando la app
app.set('port', port)

//Ejecutando Middlewares
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cors())
    .use(express.json())

//Rutas
//app.use(routes)

module.exports = app;