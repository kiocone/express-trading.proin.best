const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/', async (req,res) => {
    const posiciones = await pool.query('SELECT * FROM trade_posiciones')
    const res_activos = await pool.query('SELECT SUM(monto) AS suma_monto, COUNT(activo) AS count_activo FROM trade_posiciones WHERE activo = 1')
    res.render('admin/panel', {posiciones, capital: res_activos[0]})
})

router.get('/editar/:id', async (req,res) => {
    const {id} = req.params
    const res_posicion = await pool.query('select * from trade_posiciones where id = ?', id)
    console.log(res_posicion[0])
    res.render('admin/editar', {posicion: res_posicion[0]})
})

router.post('/editar', async (req,res) => {
    res.send('hola mundo editar admin')
})
module.exports = router