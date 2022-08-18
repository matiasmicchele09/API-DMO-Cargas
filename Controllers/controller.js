'use strict'

const API_Model = require('../Models/model'),
    API_Controller = () => {};

API_Controller.getAll = (req, res) => {
    API_Model.getAll((err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Log In
API_Controller.logIn = (req, res) => {

    let obj = Object.assign({}, req.body);

    API_Model.logIn(obj, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            if (rows.rows.length == 0) {
                console.log("El usuario y/o contrasenia son INCORRECTOS");
                res.end(JSON.stringify(rows.rows))
            } else {
                res.end(JSON.stringify(rows.rows))
            }
        }
    })
}

//Autenticación para las demás páginas - ESTO YA NO CORRERÍA 04/08/2022
/*API_Controller.auth_pages = (req, res) => {
    req.session.loggedin = session_loggedin; //lo hago asi para que quede guardado en la cookie de la sesion
    req.session.email = session_email; //de lo contrario serian solo variables suetlas
    
    if (req.session.loggedin == true) {
        console.log("Aca en auth - Iniciando sesión");
        console.log("Bienvenido ", req.session.email);
        res.end(JSON.stringify(req.session.email));
    } else {
        console.log("La sesión esta cerrada");
    }
}*/

API_Controller.getOne = (req, res) => {

    let email = req.params.email;
    API_Model.getOne(email, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.register = (req, res) => {

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error, me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    API_Model.register(obj, (err) => {
        console.log(err);
    })
}

API_Controller.update_profile = (req, res) => {

    let obj = Object.assign({}, req.body);
    API_Model.update_profile(obj, (err) => {
        console.log(err);
    })
}



module.exports = API_Controller;