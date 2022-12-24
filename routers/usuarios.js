const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


// ruta crud

router.get('/',usersController.mostrarUsuario);
router.post('/',usersController.agregarUsuarios);
router.get('/:id',usersController.unUsuario);
router.delete('/:id',usersController.eliminarUsuario);
router.put('/:id',usersController.editarUsuario);

module.exports = router;