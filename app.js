'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    routes = require('./Routes/router'),
    port = (process.env.PORT || 3000),
    app = express();

//Configurando la app
app.set('port', port)

//Ejecutando Middlewares
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cors())
    .use(express.json());

//Rutas, es como que yo importo el módulo de rutas
//el middleware termina siendo un conjunto de funciones. Lo cual no me parece mal
app.use(routes)

module.exports = app;