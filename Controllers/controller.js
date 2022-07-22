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


API_Controller.select = (req, res) => {

    let obj = Object.assign({}, req.body);

    API_Model.select(obj, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log("rows", rows.rows);
        }
    })
}
API_Controller.insert = (req, res) => {
    console.log("Aca en el back");

    /* Tuve que definir una variable (obj) objeto porque sino me tiraba un error,
    me lo creaba como un objeto vacio, no se porque. Esta en imagenes en Notion */
    let obj = Object.assign({}, req.body);
    console.log(obj);

    API_Model.insert(obj, (err) => {
        console.log(err);
    })

}

module.exports = API_Controller;