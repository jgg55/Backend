const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');


// ruta crud

router.get('/',pedidosController.mostrarPedidos);
router.post('/',pedidosController.agregarPedidos);
router.get('/:id',pedidosController.unPedido);
router.delete('/:id',pedidosController.eliminarPedido);
router.put('/:id',pedidosController.editarPedido);

module.exports = router;