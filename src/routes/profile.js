const express = require('express')
const router = express.Router()

const pool = require('../database')

const user_id = 1

router.get('/',async (req,res) => {
    const user_id = 1
    const res_usuario = await pool.query('select * from users where id = ?', user_id)
    console.log(res_usuario)
    res.render('profile/profile', {usuario: res_usuario[0]})
})

router.get('/edit', async (req,res) => {
    
    const res_usuario = await pool.query('select * from users where id = ?', user_id)
    console.log("Get", res_usuario)
    res.render('profile/edit', {usuario: res_usuario[0]})
})

router.post('/edit', async (req, res) => {
    const { username, nombre1, nombre2, apellido1, apellido2, email, telefono, direccion } = req.body
    const update_user = {
        username, 
        nombre1, 
        nombre2, 
        apellido1, 
        apellido2, 
        email, 
        telefono, 
        direccion
    }
    await pool.query('update users set ?  where id = ?', [update_user, user_id] )
    console.log("Post", update_user)
    res.redirect('/profile')
})

module.exports = router