const mysql = require('mysql')
const { promisify } = require('util')
const { database } = require('./keys')

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexion a la DB ha sido cerrada.')
        }
        if (err.code === 'ERR_CON_COUNT_ERROR'){
            console.error('La DB tiene muchas conexiones.')
        } 
        if (err.code === 'ECONNREFUSED'){
            console.error('La conexion a la DB ha sido rechazada.')
        }
    }

    if (connection) connection.release()
    console.log('DB Conectada')
    return
})

pool.query = promisify(pool.query)

module.exports = pool