const mongoose = require('mongoose');

//se coloca el esquema que esta en la base de datos

const citasSchema = mongoose.Schema({
    fecha_cita:{
        type:String,
        require:true
    },
    hora_cita:{
        type:String,
        require:true
    },
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
    area_visita:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },

},{versionkey:false});

module.exports = mongoose.model('citas', citasSchema)