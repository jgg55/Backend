const mongoose = require('mongoose');

//se coloca el esquema que esta en la base de datos

const usuariosSchema = mongoose.Schema({
    nombre_usuario:{
        type:String,
        require:true
    },
    contraseña:{
        type:Number,
        require:true
    },
    rol:{
        type:String,
        require:true
    }

},{versionkey:false});

module.exports = mongoose.model('usuarios', usuariosSchema)
