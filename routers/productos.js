const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');


// ruta crud

router.get('/',productosController.mostrarProductos);
router.post('/',productosController.agregarProductos);
router.get('/:id',productosController.unProducto);
router.delete('/:id',productosController.eliminarProducto);
router.put('/:id',productosController.editarProducto);

module.exports = router;