const mongoose = require('mongoose');

//se coloca el esquema que esta en la base de datos

const clientesSchema = mongoose.Schema({
    nombres:{
        type:String,
        require:true
    },
    apellidos:{
        type:String,
        require:true
    },
    documento:{
        type:Number,
        require:true
    },
    correo:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },
    direccion:{
        type:String,
        require:true
    },
    ciudad:{
        type:String,
        require:true
    },

},{versionkey:false});

module.exports = mongoose.model('clientes', clientesSchema)
