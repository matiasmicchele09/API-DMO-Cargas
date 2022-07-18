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

API_Controller.insert = (req, res) => {
    console.log("Aca en el back");
    console.log(req.body);

}

module.exports = API_Controller;