//Consultar Clientes

const Cliente = require ('../models/clientes');

exports.mostrarClientes = async(req,res) => {
try {
    const clientes = await Cliente.find();
    res.json(clientes);
    
} catch (error) {
    console.log(error);
    res.status(500).send("Error al consultar los Clientes");
}

}

//Agregar Clientes

exports.agregarClientes = async(req,res) => {
    try {
        let cliente;
        cliente = new Cliente(req.body)
    
        await cliente.save();
        res.send(cliente);
    
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al agregar los clientes");
    }
    
    }

//Consultar un cliente por su ID

exports.unCliente = async(req,res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        
        if(!cliente){

            res.status(404).json({msg:"no se encuentra el cliente"});
            
        }

        res.send(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al ver el cliente");
    }
    
    }

//Eliminar un Cliente por su ID

exports.eliminarCliente = async(req,res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        
        if(!cliente){

            res.status(404).json({msg:"no existe el cliente"});
            return
        }

        await Cliente.findOneAndDelete({_id:req.params.id});
        res.json({msg:"el Cliente fue eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }

//Editar un Cliente  por su ID

exports.editarCliente = async(req,res) => {
    try {
        const{nombres,apellidos,documento,correo,telefono,direccion,ciudad} = req.body;

        let cliente = await Cliente.findById(req.params.id);

                
        if(!Cliente){

            res.status(404).json({msg:"no existe el cliente"});
            return
        }

        cliente.nombres = nombres;
        cliente.apellidos = apellidos;
        cliente.documento = documento;
        cliente.correo = correo;
        cliente.telefono = telefono;
        cliente.direccion = direccion;
        cliente.ciudad = ciudad;

        cliente = await Cliente.findOneAndUpdate({_id:req.params.id}, cliente,{new:true});
        res.json(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }
    