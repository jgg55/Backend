const mongoose = require('mongoose');

//se coloca el esquema que esta en la base de datos

const productosSchema = mongoose.Schema({
    nombre_producto: {
        type: String,
        require: true,
        unique: true
    },
    imagen: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require:true
    },
    precio: {
        type: Number,
        require: true

    }

}, { versionkey: false });

module.exports = mongoose.model('productos', productosSchema)