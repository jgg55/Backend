const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');


// ruta crud

router.get('/',clientesController.mostrarClientes);
router.post('/',clientesController.agregarClientes);
router.get('/:id',clientesController.unCliente);
router.delete('/:id',clientesController.eliminarCliente);
router.put('/:id',clientesController.editarCliente);

module.exports = router;