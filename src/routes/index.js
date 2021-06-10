const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Hola Mundo- Login </h1><br><a href="/panel">Enlace a panel</a>')
});

module.exports = router;