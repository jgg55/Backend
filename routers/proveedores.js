const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');


// ruta crud

router.get('/',proveedoresController.mostrarProveedores);
router.post('/',proveedoresController.agregarProveedores);
router.get('/:id',proveedoresController.unProveedor);
router.delete('/:id',proveedoresController.eliminarProveedor);
router.put('/:id',proveedoresController.editarProveedor);

module.exports = router;
