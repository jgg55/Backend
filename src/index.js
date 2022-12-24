const express = require ('express');
const conectarBD = require('../config/bd');
const cors = require('cors');

//crear servidor
const app = express();
const port = process.env.PORT || 5000;

//enlazar la conexion
conectarBD();
app.use(cors());
app.use(express.json());

app.use('/api/proveedores', require('../routers/proveedores'));
app.use('/api/clientes', require('../routers/clientes'));
app.use('/api/citas', require('../routers/citas'));
app.use('/api/usuarios', require('../routers/usuarios'));
app.use('/api/pedidos', require('../routers/pedidos'));
app.use('/api/productos', require('../routers/productos'));

// mostrar un mensaje en el navegador
app.get('/' , (req,res) => {
    res.send ("Bienvenido el servidor esta configurado");
});


app.listen(port, () => console.log("Servidor conectado al puerto" , port));

