const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Proin.best - Bienvenido </h1><br><a href="/panel" style=text: "center">Ir al panel</a>')
});

module.exports = router;