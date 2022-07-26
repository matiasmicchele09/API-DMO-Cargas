'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
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
    .use(express.json())
    .use(session({
        /* 
                store: new(require('connect-pg-simple')(session))({
                    esto era para que guarde en la base de datos la sesion pero despues lo sigo,
                    ahora no se bien como hacerlo y pierdo tiempo. 26/07/2022
                }), */
        secret: 'secret', //es para generar una clave cualquiera
        resave: true, //forma de almacenamiento, por defecto en verderaro
        saveUninitialized: true
            //cookie: { secure: true } Esto es para HTTPS, ahora estoy usando HTTP
    }))


//Rutas, es como que yo importo el módulo de rutas
//el middleware termina siendo un conjunto de funciones. Lo cual no me parece mal
app.use(routes)

module.exports = app;