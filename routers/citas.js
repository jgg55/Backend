const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');


// ruta crud

router.get('/',citasController.mostrarCitas);
router.post('/',citasController.agregarCitas);
router.get('/:id',citasController.unCita);
router.delete('/:id',citasController.eliminarCita);
router.put('/:id',citasController.editarCita);

module.exports = router;