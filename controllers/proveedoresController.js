//Consultar proveedores

const Proveedor = require ('../models/Proveedor');

exports.mostrarProveedores = async(req,res) => {
try {
    const proveedores = await Proveedor.find();
    res.json(proveedores);
    
} catch (error) {
    console.log(error);
    res.status(500).send("Error al consultar los proveedores");
}

}

//Agregar proveedores 

exports.agregarProveedores = async(req,res) => {
try {
    let proveedor;
    proveedor = new Proveedor(req.body)

    await proveedor.save();
    res.send(proveedor);

} catch (error) {
    console.log(error);
    res.status(500).send("Error al agregar el proveedor");
}

}

//Consultar un proveedor por su ID

exports.unProveedor = async(req,res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        
        if(!proveedor){

            res.status(404).json({msg:"no se encuentra el proveedor"});
            
        }

        res.send(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al ver el proveedor");
    }
    
    }

//Eliminar un proveedor  por su ID

exports.eliminarProveedor = async(req,res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        
        if(!proveedor){

            res.status(404).json({msg:"no existe el proveedor"});
            return
        }

        await Proveedor.findOneAndDelete({_id:req.params.id});
        res.json({msg:"el proveedor fue eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }

//Editar un proveedor  por su ID

exports.editarProveedor = async(req,res) => {
    try {
        const{nombres,apellidos,documento,correo,telefono,direccion,ciudad} = req.body;

        let proveedor = await Proveedor.findById(req.params.id);

                
        if(!proveedor){

            res.status(404).json({msg:"no existe el proveedor"});
            return
        }

        proveedor.nombres = nombres;
        proveedor.apellidos = apellidos;
        proveedor.documento = documento;
        proveedor.correo = correo;
        proveedor.telefono = telefono;
        proveedor.direccion = direccion;
        proveedor.ciudad = ciudad;

        proveedor = await Proveedor.findOneAndUpdate({_id:req.params.id}, proveedor,{new:true});
        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }