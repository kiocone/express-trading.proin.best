const express = require('express')
const router = express.Router()

const pool = require('../database')

const user_id = 1

router.get('/', async(req,res) => {
    const res_activos = await pool.query('SELECT SUM(monto) AS suma_monto, COUNT(activo) AS count_activo FROM trade_posiciones where activo = 1 AND user_id = ?', user_id)
    console.log(res_activos[0])
    res.render('panel', {capital: res_activos[0]})
})

module.exports = router