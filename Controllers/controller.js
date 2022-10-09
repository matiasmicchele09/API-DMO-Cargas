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
    console.log(obj);
    API_Model.update_profile(obj, (err) => {
        console.log(err);
    })
}

//Cuenta
API_Controller.update_cuenta = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log(obj);
    API_Model.update_cuenta(obj, (err) => {
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
        if (err) {
            console.log(err);
        } else {
            res.sendStatus(200);
            //console.log(satus);
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

//GetAll cargas para poder ver que provincias tienen o no cargas
API_Controller.getAllCargas = (req, res) => {

    API_Model.getAllCargas((err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Buscar Cargas
API_Controller.getAllCargasProvincia = (req, res) => {

    let nombre_provincia = req.params.nombre_provincia;
    API_Model.getAllCargasProvincia(nombre_provincia, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Confirmar Solicitud de Carga
API_Controller.confirm_request = (req, res) => {

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error, me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    console.log(obj);
    API_Model.confirm_request(obj, (err) => {
        console.log(err);
    })
}

//Solicitudes
API_Controller.getUserRequest = (req, res) => {

    let cod_usuario = req.params.cod_usuario;
    API_Model.getUserRequest(cod_usuario, (err, rows) => {
        if (err) {
            // console.log('Error:', err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Estado Solicitud
API_Controller.getTipoEstadoSolicitud = (req, res) => {

    let estado = req.params.cod_estado;
    API_Model.getTipoEstadoSolicitud(estado, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo Producto
API_Controller.getOneTipoProducto = (req, res) => {

    let cod_tipo_producto = req.params.cod_tipo_producto;
    API_Model.getOneTipoProducto(cod_tipo_producto, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get para poner el dador de carga en la card
API_Controller.getNameUser = (req, res) => {

    let cod_usuario = req.params.cod_usuario;
    API_Model.getNameUser(cod_usuario, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Actualizar Estado de una Carga
API_Controller.updateEstadoCarga = (req, res) => {
    let obj = Object.assign({}, req.body);
    //console.log(obj);
    API_Model.updateEstadoCarga(obj, (err) => {
        console.log(err);
    })
}

//Get One Solicitud
API_Controller.getOneSolicitud = (req, res) => {

    let cod_solicitud = req.params.cod_solicitud;
    API_Model.getOneSolicitud(cod_solicitud, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Cargas Solicitadas - Para Dador de Carga
API_Controller.getFreightsRequest = (req, res) => {
    let cod_carga = req.params.cod_carga;
    API_Model.getFreightsRequest(cod_carga, (err, rows) => {
        if (err) {
            // console.log('Error:', err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Actualizar estado de una Solicitud
API_Controller.updateEstadoSolicitud = (req, res) => {
    let obj = Object.assign({}, req.body);
    //console.log(obj);
    API_Model.updateEstadoSolicitud(obj, (err) => {
        console.log(err);
    })
}

//Subida de archivos
API_Controller.uploadFiles = (req, res) => {

    let filePDF = req.files.file,
        objFile = {
            cod_solicitud: req.params.cod_solicitud,
            file_name: req.files.file.name
        };

    /* filePDF.mv(`http://localhost:3000/assets/files/${req.files.file.name}`, err => {
        if (err) {
            return res.status(500).send(err);
        }
    }) */

    /* Si lo subo al 3000 me deja, pero no puedo descargarlo desde el front, debería poder
    llamarse a la función downloadFile, pero no me está funcionando.
    Si lo intento subir al 5000 tampoco me deja, me tira un error de encabezados.
    Así que lo que me quedó por hacer es poner la ruta normal así como puse abajo... 
    para estos fines lo dejo así, cualquier cosa veo como arreglarlo */
    filePDF.mv(`C:/Users/usuario/Desktop/DMO-Cargas-2022/Front/assets/files/${req.files.file.name}`, err => {
        if (err) {
            return res.status(500).send(err);
        }
    })

    //console.log("objFile", objFile);

    API_Model.uploadFiles(objFile, (err, rows) => {
        if (err) {
            // console.log('Error:', err);
        } else {
            //console.log(rows.rows);
            res.end(JSON.stringify(rows.rows))
        }
    })
};

//Get nombre archivo
API_Controller.getNameFile = (req, res) => {

    let cod_solicitud = req.params.cod_solicitud;
    API_Model.getNameFile(cod_solicitud, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Descarga de arhivos
/* API_Controller.downloadFile = (req, res) => {

    let nombre_archivo = req.params.nombre_archivo;
    console.log(__dirname);
    res.download(`http://localhost:3000/files/${nombre_archivo}`, nombre_archivo, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Archivo Descargado");
        }
    })
}
 */
API_Controller.uploadImages = (req, res) => {
    let fileImg = req.files.file;
    console.log(fileImg);

    if (fileImg.truncated) {
        return res.status(400).json({
            ok: false,
            msg: "El archivo es demasiado grande. Se permite hasta 50MB"
        })
    }
    fileImg.mv(`files_users/${req.files.file.name}`, err => {
        /* fileImg.mv(`C:/files_users/${req.files.file.name}`, err => { */

        if (err) {
            return res.status(400).json({
                ok: false,
                msg: "No se pudo cargar el archivo"
            })
        }
        res.json({
            ok: true,
            msg: `${req.files.file.name} subido con éxito`
        })
    })
}

//const path = require('path');
const fs = require('fs');
API_Controller.downloadImg = async(req, res) => {
    const nombre_archivo = req.params.nombre_archivo.trim();
    console.log(nombre_archivo);
    const pathArchivo = `C:/Users/usuario/Desktop/DMO-Cargas-2022/API/files_users/${nombre_archivo}`;
    console.log("pathArchivo", pathArchivo);

    if (!fs.existsSync(pathArchivo)) {
        return res.status(400).json({
            ok: false,
            msg: "No se encontó el archivo"
        })
    }

    res.sendFile(pathArchivo);
}

module.exports = API_Controller;