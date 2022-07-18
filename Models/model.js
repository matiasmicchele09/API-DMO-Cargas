'use strict'

const conn = require('./API_connection'),
    API_Model = () => {};


API_Model.getAll = (cb) => {
    conn.query('SELECT * FROM usuarios', cb)
}

API_Model.close = () => conn.end()

module.exports = API_Model;