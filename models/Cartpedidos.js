const mongoose = require('mongoose');

//se coloca el esquema que esta en la base de datos

const pedidosSchema = mongoose.Schema({
    descripcion: {
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
        require: true
    },
    valor_total: {
        type: Number,
        require: true

    }

}, { versionkey: false });

module.exports = mongoose.model('pedidos', pedidosSchema)
