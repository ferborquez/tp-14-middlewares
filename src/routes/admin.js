const express = require('express');
const router = express.Router();

const {main, list, crear, editar, eliminar,} = require('../controllers/adminControllers');
const adminLogs = require('../middlewares/adminLogs')

//LISTA
router.get('/',adminLogs,list);

//CREAR
router.get('/crearProducto',crear);

//EDITAR
router.get('/editarProducto',editar);

//ELIMINAR
router.get('/eliminarProducto',eliminar);

module.exports = router;