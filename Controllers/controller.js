'use strict'

const API_Model = require('../Models/model'),
    API_Controller = () => {};

//Registración
API_Controller.register = (req, res) => {

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error, me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    API_Model.register(obj, (err) => {
        console.log(err);
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

//Perfil
API_Controller.update_profile = (req, res) => {

    let obj = Object.assign({}, req.body);
    API_Model.update_profile(obj, (err) => {
        console.log(err);
    })
}

API_Controller.getOne = (req, res) => {

    let cod_usuario = req.params.cod_usuario;
    API_Model.getOne(cod_usuario, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get para Tipo Camiones
API_Controller.getAllTypeTruck = (req, res) => {
    API_Model.getAllTypeTruck((err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.getOneTypeTruck = (req, res) => {

    let tipo_camion = req.params.cod_tipo_camion;
    API_Model.getOneTypeTruck(tipo_camion, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}


//Get para Tipo Carroceria
API_Controller.getCarroceria = (req, res) => {
    API_Model.getCarroceria((err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.getOneTipoCarroceria = (req, res) => {

    let tipo_carrroceria = req.params.cod_tipo_carroceria;
    API_Model.getOneTipoCarroceria(tipo_carrroceria, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Agregar Camión
API_Controller.add_truck = (req, res) => {

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error, me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    console.log(obj);
    API_Model.add_truck(obj, (err) => {
        console.log(err);
    })
}

//Eliminar Camión
API_Controller.deleteTruck = (req, res, next) => {
    let patente = req.params.patente
    API_Model.deleteTruck(patente, (err, rows) => {

        if (err) {
            console.log(err);
        }
    })

}

//Editar Camión
API_Controller.getOneTruck = (req, res) => {

    let patente = req.params.patente;
    API_Model.getOneTruck(patente, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.updateTruck = (req, res) => {

    let obj = Object.assign({}, req.body);
    API_Model.updateTruck(obj, (err) => {
        console.log(err);
    })
}

//Todos los camiones de un usuario
API_Controller.getTrucksUser = (req, res) => {

    let cod_usuario = req.params.cod_usuario;
    API_Model.getTrucksUser(cod_usuario, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
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

//Get para Tipo de Carga
API_Controller.getAllTiposCarga = (req, res) => {
    API_Model.getAllTiposCarga((err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

module.exports = API_Controller;