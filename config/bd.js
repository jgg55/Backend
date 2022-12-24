const mongoose = require ('mongoose')
require('dotenv').config();

const conectarBD = () => {
    //conexion con base de datos mongodb
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Esta conectada la base de datos de MongoDb"))
    .catch((err) => console.error(err));
}

module.exports= conectarBD;