//Consultar productos

const Producto = require ('../models/Productos');

exports.mostrarProductos = async(req,res) => {
try {
    const productos = await Producto.find();
    res.json(productos);
    
} catch (error) {
    console.log(error);
    res.status(500).send("no existen productos");
}

}

//Agregar productos

exports.agregarProductos = async(req,res) => {
try {
    let producto;
    producto = new Producto(req.body)

    await producto.save();
    res.send(producto);

} catch (error) {
    console.log(error);
    res.status(500).send("Error al agregar el producto");
}

}

//Consultar un proveedor por su ID

exports.unProducto = async(req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        
        if(!producto){

            res.status(404).json({msg:"no se encuentra el producto"});
            
        }

        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al consultar el producto");
    }
    
    }

//Eliminar un proveedor  por su ID

exports.eliminarProducto = async(req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        
        if(!producto){

            res.status(404).json({msg:"no existe el producto"});
            return
        }

        await Producto.findOneAndDelete({_id:req.params.id});
        res.json({msg:"el producto fue eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }

//Editar un producto por su ID

exports.editarProducto = async(req,res) => {
    try {
        const{nombre_producto, imagen, cantidad, precio} = req.body;

        let producto = await Producto.findById(req.params.id);

                
        if(!producto){

            res.status(404).json({msg:"no existe el producto"});
            return
        }

        producto.nombre_producto = nombre_producto;
        producto.imagen = imagen;
        producto.cantidad = cantidad;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({_id:req.params.id}, producto,{new:true});
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }