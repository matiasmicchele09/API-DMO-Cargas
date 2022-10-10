'use strict'

const API_Model = require('../Models/model'),
    API_Controller = () => {};

//Registración
API_Controller.register = (req, res) => {
    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error,
    me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    console.log("Registración: ", obj);
    API_Model.register(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo realizar la Registración. ${err}`
        })
    })
}

//Log In
API_Controller.logIn = (req, res) => {
    let obj = Object.assign({}, req.body);
    API_Model.logIn(obj, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo realizar el Log In. ${err}`
            })
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
    console.log("Update Perfil", obj);
    API_Model.update_profile(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo realizar la Actualización de Perfil. ${err}`
        })
    })
}

//Cuenta
API_Controller.update_cuenta = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Update Cuenta", obj);
    API_Model.update_cuenta(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo realizar la Actualización de la Cuenta. ${err}`
        })
    })
}

//GetOne datos de usuario
API_Controller.getOne = (req, res) => {
    let cod_usuario = req.params.cod_usuario;
    API_Model.getOne(cod_usuario, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se encontrar al Usuario. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get para Tipo Camiones
API_Controller.getAllTypeTruck = (req, res) => {
    API_Model.getAllTypeTruck((err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar los Tipos de Camiones. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.getOneTypeTruck = (req, res) => {
    let tipo_camion = req.params.cod_tipo_camion;
    API_Model.getOneTypeTruck(tipo_camion, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el Tipo de Camión. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}


//Get para Tipo Carroceria
API_Controller.getCarroceria = (req, res) => {
    API_Model.getCarroceria((err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar los Tipos de Carrocerías. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.getOneTipoCarroceria = (req, res) => {
    let tipo_carrroceria = req.params.cod_tipo_carroceria;
    API_Model.getOneTipoCarroceria(tipo_carrroceria, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el Tipo de Carrocería. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Agregar Camión
API_Controller.add_truck = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Add Camión: ", obj);
    API_Model.add_truck(obj, (err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo agregar el Camión. ${err}`
            })
        } else {
            res.sendStatus(200);
        }

    })
}

//Editar Camión
API_Controller.getOneTruck = (req, res) => {
    let patente = req.params.patente;
    API_Model.getOneTruck(patente, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el Camión. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

API_Controller.updateTruck = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Update Camión: ", obj);
    API_Model.updateTruck(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo realizar la actualización de los datos del Camión. ${err}`
        })
    })
}

//Eliminar Camión
API_Controller.deleteTruck = (req, res, next) => {
    let patente_camion = req.params.patente_camion
    API_Model.deleteTruck(patente_camion, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se eliminar el Camión. ${err}`
            })
        }
    })
}

//Todos los camiones de un usuario
API_Controller.getTrucksUser = (req, res) => {
    let cod_usuario = req.params.cod_usuario;
    API_Model.getTrucksUser(cod_usuario, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar los camiones del Usuario. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Agregar Carrocería
API_Controller.add_carroceria = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Add Carrocería: ", obj);
    API_Model.add_carroceria(obj, (err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se agregar la Carrocería. ${err}`
            })
        } else {
            res.sendStatus(200);
        }
    })
}

//Editar Carrocería
API_Controller.getOneCarroceria = (req, res) => {
    let patente_carroceria = req.params.patente_carroceria;
    API_Model.getOneCarroceria(patente_carroceria, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se editar la Carrocería. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Update Carrocería
API_Controller.updateCarroceria = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Update Carrocería: ", obj);
    API_Model.updateCarroceria(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo actualizar la Carrocería. ${err}`
        })
    })
}

//Eliminar Carrocería
API_Controller.deleteCarroceria = (req, res, next) => {
    let patente_carroceria = req.params.patente_carroceria
    API_Model.deleteCarroceria(patente_carroceria, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo eliminar la Carrocería. ${err}`
            })
        }
    })
}

//Todos las carrocerias de un usuario
API_Controller.getCarroceriasUser = (req, res) => {
    let cod_usuario = req.params.cod_usuario;
    API_Model.getCarroceriasUser(cod_usuario, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar las Carrocerías del Usuario. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get para Tipo de Carga
API_Controller.getAllTiposCarga = (req, res) => {
    API_Model.getAllTiposCarga((err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar los Tipos de Carga. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get para Tipo Producto
API_Controller.getAllTiposProducto = (req, res) => {
    let tipo_carga = req.params.tipo_carga;
    API_Model.getAllTiposProducto(tipo_carga, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar los Tipos de Producto. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get Estado Carga: Publicada
API_Controller.getOneEstadoCarga = (req, res) => {
    let cod_estado = req.params.cod_estado;
    API_Model.getOneEstadoCarga(cod_estado, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se Obtener el estado de Carga: Publicada. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Agregar Carga
API_Controller.add_freight = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Add Carga: ", obj);
    API_Model.add_freight(obj, (err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se agregar la Carga. ${err}`
            })
        } else {
            res.sendStatus(200);
        }
    })
}

//Todos las cargas de un usuario
API_Controller.getCargasUser = (req, res) => {
    let cod_usuario = req.params.cod_usuario;
    API_Model.getCargasUser(cod_usuario, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar las Cargas del Usuario. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Carga
API_Controller.getOneTipoCarga = (req, res) => {
    let tipo_carga = req.params.cod_tipo_carga;
    API_Model.getOneTipoCarga(tipo_carga, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el Tipo de Carga. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Producto
API_Controller.getOneTipoProducto = (req, res) => {
    let tipo_producto = req.params.cod_tipo_producto;
    API_Model.getOneTipoProducto(tipo_producto, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el Tipo de Producto. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Estado
API_Controller.getOneTipoEstado = (req, res) => {
    let estado = req.params.cod_estado;
    API_Model.getOneTipoEstado(estado, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el Tipo de Estado. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Carga de un Usuario
API_Controller.getOneCargaUser = (req, res) => {
    let cod_carga = req.params.cod_carga;
    API_Model.getOneCargaUser(cod_carga, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar la Carga de un Usuario. ${err}`
            })
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
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se eliminar la Carga. ${err}`
            })
        }
    })
}

//Actualizar una Carga
API_Controller.updateCarga = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Update Carga: ", obj);
    API_Model.updateCarga(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo realizar la actualización de los datos de la Carga. ${err}`
        })
    })
}

//GetAll cargas para poder ver que provincias tienen o no cargas
API_Controller.getAllCargas = (req, res) => {
    API_Model.getAllCargas((err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar las Cargas. ${err}`
            })
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
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar las Cargas. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Confirmar Solicitud de Carga
API_Controller.confirm_request = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Confirmación de Solicitud: ", obj);
    API_Model.confirm_request(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo Confirmar la Solicitud. ${err}`
        })
    })
}

//Solicitudes
API_Controller.getUserRequest = (req, res) => {
    let cod_usuario = req.params.cod_usuario;
    API_Model.getUserRequest(cod_usuario, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudieron encontrar las Solicitudes del Usuario. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Get One Tipo de Estado Solicitud
API_Controller.getTipoEstadoSolicitud = (req, res) => {
    let estado = req.params.cod_estado;
    API_Model.getTipoEstadoSolicitud(estado, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el Tipo de Estado de la Solicitud. ${err}`
            })
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
            if (err) {
                return res.status(400).json({
                    ok: false,
                    msg: `Bad Request: No se encontrar el Nombre del Usuario. ${err}`
                })
            }
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Actualizar Estado de una Carga
API_Controller.updateEstadoCarga = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Update Estado Carga: ", obj);
    API_Model.updateEstadoCarga(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se actualizar el Estado de la Carga. ${err}`
        })
    })
}

//Get One Solicitud
API_Controller.getOneSolicitud = (req, res) => {
    let cod_solicitud = req.params.cod_solicitud;
    API_Model.getOneSolicitud(cod_solicitud, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar la Solicitud. ${err}`
            })
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
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar la Carga Solicitada. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Actualizar estado de una Solicitud
API_Controller.updateEstadoSolicitud = (req, res) => {
    let obj = Object.assign({}, req.body);
    console.log("Update Estado Solicitud: ", obj);
    API_Model.updateEstadoSolicitud(obj, (err) => {
        return res.status(400).json({
            ok: false,
            msg: `Bad Request: No se pudo actualiza el estado de la Solicitud. ${err}`
        })
    })
}

//Subida de archivos
API_Controller.uploadFiles = (req, res) => {
    let filePDF = req.files.file,
        objFile = {
            cod_solicitud: req.params.cod_solicitud,
            file_name: req.files.file.name
        };
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

    API_Model.uploadFiles(objFile, (err, rows) => {
        if (err) {
            return res.json({
                ok: false,
                msg: `Bad Request: No se pudo Subir el Archivo. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
};

//Get nombre archivo
API_Controller.getNameFile = (req, res) => {
    let cod_solicitud = req.params.cod_solicitud;
    API_Model.getNameFile(cod_solicitud, (err, rows) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `Bad Request: No se pudo encontrar el nombre del Archivo. ${err}`
            })
        } else {
            res.end(JSON.stringify(rows.rows))
        }
    })
}

//Descarga de arhivos
/* API_Controller.downloadFile = (req, res) => {

    let nombre_archivo = req.params.nombre_archivo;
    console.log(__dirname);
    res.sendFile(`C:/Users/usuario/Desktop/DMO-Cargas-2022/API/files_users/${nombre_archivo}`)
        res.download(`C:/Users/usuario/Desktop/DMO-Cargas-2022/API/files_users/${nombre_archivo}`, nombre_archivo, function(err) {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    msg: "No se pudo cargar el archivo"
                })
            } else {
                res.sendFile(`C:/Users/usuario/Desktop/DMO-Cargas-2022/API/files_users/${nombre_archivo}`)
            }
        })
} */

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
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: `No se pudo cargar la Imagen. ${err}`
            })
        }
        res.json({
            ok: true,
            msg: `${req.files.file.name} subido con éxito`
        })
    })
}

const fs = require('fs');
API_Controller.downloadImg = async(req, res) => {
    const nombre_archivo = req.params.nombre_archivo.trim();
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