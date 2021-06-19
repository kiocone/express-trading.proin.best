const express = require('express')
const pool = require('../database')
const router = express.Router()
const fechaHoy = require('../lib/fechaHoy')

const user_id = 1

router.get('/', async (req, res) => {
    const posiciones = await pool.query('SELECT * FROM trade_posiciones WHERE visible = 1')
    const res_activos = await pool.query('SELECT SUM(monto) AS suma_monto, COUNT(activo) AS count_activo FROM trade_posiciones where activo = 1 AND visible = 1 AND user_id = ?', user_id)
    res.render('posiciones/posiciones', {posiciones, capital: res_activos[0]})
})

router.get('/add', (req, res) => {
    res.render('posiciones/add')
})

router.post('/add', async (req, res) => {
    const { monto } = req.body
    const fecha_reg = fechaHoy
    var activo = false
    
    const newPosicion = {
        user_id,
        fecha_reg,
        monto,
        activo
    }

    console.log(newPosicion)

    await pool.query('INSERT INTO trade_posiciones set ?', [newPosicion])
    req.flash('success', 'Pocisión agregada')
    res.redirect('/posiciones')
})

router.get('/detalles/:id', async ( req, res ) => {
    const {id} = req.params
    const detalle = await pool.query('SELECT * FROM trade_posiciones WHERE id = ?', id)
    res.render('posiciones/detalles', {detalle: detalle[0]})
})

router.get('/detalles/anular/:id', async (req,res) => {
    const {id} = req.params
    await pool.query('UPDATE trade_posiciones set visible = 0 where id = ?', id)
    req.flash('success', 'Pocisión Anulada')
    res.redirect('/posiciones')
})

router.get('/detalles/cerrar/:id', async (req,res) => {
    const {id} = req.params
    await pool.query('UPDATE trade_posiciones set visible = 0 where id = ?', id)
    req.flash('success', 'Pocisión Cerrada')
    res.redirect('/posiciones')
})

router.get('/historial', async (req,res) => {
    const historial = await pool.query('SELECT * FROM trade_posiciones WHERE visible = 0 AND user_id = ?', user_id)
    res.render('posiciones/historial', {historial})
})

router.get('/datos/', async (req,res) => {
    res.render('posiciones/datos')
})

module.exports = router