
const router = require('express').Router();
//const { checkToken } = require('../helpers/middlewares');


router.use('/usuarios', require('./api/usuarios'));
router.use('/libros', require('./api/libros'))

module.exports = router