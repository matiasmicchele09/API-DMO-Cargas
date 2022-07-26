'use strict'

const API_Model = require('../Models/model'),

    API_Controller = () => {};

API_Controller.getAll = (req, res) => {
        API_Model.getAll((err, rows) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rows.rows);
                res.end(JSON.stringify(rows.rows))
            }
        })
    }
    //Variables para la sesión del usuario
var session_email = "";
var session_loggedin = false;

//Autenticación
API_Controller.authentication = (req, res) => {

    let obj = Object.assign({}, req.body);

    API_Model.authentication(obj, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            if (rows.rows.length == 0) {
                session_loggedin = false;
                session_Email = "";
                console.log("El usuario y/o contrasenia ha sido mal ingresado");
                res.end(JSON.stringify(rows.rows))
            } else {
                session_email = rows.rows[0].email; //con el modulo de express-session así se define una variable sesión, no hace falta poner let, const...
                session_loggedin = true;
                res.end(JSON.stringify(rows.rows))
            }
        }
    })
}

//Autenticación para las demás páginas
API_Controller.auth_pages = (req, res) => {
    console.log("Aca en auth");
    req.session.loggedin = session_loggedin; //lo hago asi para que quede guardado en la cookie de la sesion
    req.session.email = session_email; //de lo contrario serian solo variables suetlas
    /*console.log("req.session.email", req.session.email, "req.session.loggedin", req.session.loggedin);
    console.log("req.session.id ", req.session.id, "req.session.cookie ", req.session.cookie);
    console.log(req.session);*/
    if (req.session.loggedin == true) {
        /*console.log("Bienvenido ", req.session.email);*/
        res.end(JSON.stringify(req.session.email));
    }
}

//Log Out
API_Controller.logOut = (req, res) => {
    console.log("Cerrando Sesion");
    req.session.destroy()
}

API_Controller.insert = (req, res) => {

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error,
    me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    console.log(obj);

    API_Model.insert(obj, (err) => {
        console.log(err);
    })

}

module.exports = API_Controller;