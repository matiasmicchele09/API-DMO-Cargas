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

//Eliminar Camión
API_Controller.deleteTruck = (req, res, next) => {
    let patente_camion = req.params.patente_camion
    API_Model.deleteTruck(patente_camion, (err, rows) => {

        if (err) {
            console.log(err);
        }
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

//Agregar Carrocería
API_Controller.add_carroceria = (req, res) => {

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error, me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    console.log(obj);
    API_Model.add_carroceria(obj, (err) => {
        console.log(err);
    })
}

//Editar Carrocería
API_Controller.getOneCarroceria = (req, res) => {

    let patente_carroceria = req.params.patente_carroceria;
    API_Model.getOneCarroceria(patente_carroceria, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.updateCarroceria = (req, res) => {

    let obj = Object.assign({}, req.body);
    API_Model.updateCarroceria(obj, (err) => {
        console.log(err);
    })
}

//Eliminar Carrocería
API_Controller.deleteCarroceria = (req, res, next) => {
    let patente_carroceria = req.params.patente_carroceria
    API_Model.deleteCarroceria(patente_carroceria, (err, rows) => {

        if (err) {
            console.log(err);
        }
    })
}

//Todos las carrocerias de un usuario
API_Controller.getCarroceriasUser = (req, res) => {

    let cod_usuario = req.params.cod_usuario;
    API_Model.getCarroceriasUser(cod_usuario, (err, rows) => {
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

//Get para Tipo Producto
API_Controller.getAllTiposProducto = (req, res) => {
    let tipo_carga = req.params.tipo_carga;
    console.log(tipo_carga);
    API_Model.getAllTiposProducto(tipo_carga, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get Estado Carga: Publicada
API_Controller.getOneEstadoCarga = (req, res) => {

    let cod_estado = req.params.cod_estado;
    API_Model.getOneEstadoCarga(cod_estado, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Agregar Carga
API_Controller.add_freight = (req, res) => {

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error, me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    console.log(obj);
    API_Model.add_freight(obj, (err) => {
        console.log(err);
    })
}

//Todos las cargas de un usuario
API_Controller.getCargasUser = (req, res) => {

    let cod_usuario = req.params.cod_usuario;
    console.log(cod_usuario);
    API_Model.getCargasUser(cod_usuario, (err, rows) => {
        if (err) {
            // console.log('Error:', err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Carga
API_Controller.getOneTipoCarga = (req, res) => {

    let tipo_carga = req.params.cod_tipo_carga;
    API_Model.getOneTipoCarga(tipo_carga, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Producto
API_Controller.getOneTipoProducto = (req, res) => {

    let tipo_producto = req.params.cod_tipo_producto;
    API_Model.getOneTipoProducto(tipo_producto, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Estado
API_Controller.getOneTipoEstado = (req, res) => {

    let estado = req.params.cod_estado;
    API_Model.getOneTipoEstado(estado, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Carga de un Usuario
API_Controller.getOneCargaUser = (req, res) => {

    let cod_carga = req.params.cod_carga;
    API_Model.getOneCargaUser(cod_carga, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Eliminar Carga
API_Controller.deleteCarga = (req, res, next) => {
    let cod_carga = req.params.cod_carga
    API_Model.deleteCarga(cod_carga, (err, rows) => {

        if (err) {
            console.log(err);
        }
    })

}

//Actualizar una Carga
API_Controller.updateCarga = (req, res) => {

    let obj = Object.assign({}, req.body);
    console.log(obj);
    API_Model.updateCarga(obj, (err) => {
        console.log(err);
    })
}

//Buscar Cargas
API_Controller.getAllCargas = (req, res) => {

    let nombre_provincia = req.params.nombre_provincia;
    API_Model.getAllCargas(nombre_provincia, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}


module.exports = API_Controller;