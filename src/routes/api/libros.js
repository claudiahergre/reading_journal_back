const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Obteniendo lista de libros');
});

module.exports = router;
