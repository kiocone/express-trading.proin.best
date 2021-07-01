const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/', async (req,res) => {
    const posiciones = await pool.query('SELECT * FROM trade_posiciones')
    const res_activos = await pool.query('SELECT SUM(monto) AS suma_monto, COUNT(activo) AS count_activo FROM trade_posiciones WHERE activo = 1')
    res.render('admin/panel', {posiciones, capital: res_activos[0]})
})

module.exports = router