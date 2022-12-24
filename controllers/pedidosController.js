//Consultar Pedidos

const Pedido = require ('../models/Cartpedidos');
const Producto = require ('../models/Productos');

exports.mostrarPedidos = async(req,res) => {
try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
    
} catch (error) {
    console.log(error);
    res.status(500).send("no existen el pedido");
}

}

//Agregar Pedido

exports.agregarPedidos = async(req,res) => {
try {
    let pedido;
    pedido= new Pedido(req.body)

    await pedido.save();
    res.send(pedido);

} catch (error) {
    console.log(error);
    res.status(500).send("Error al agregar el pedido");
}

}

//Consultar un pedido por su ID

exports.unPedido = async(req,res) => {
    try {
        let pedido = await Pedido.findById(req.params.id);
        
        if(!pedido){

            res.status(404).json({msg:"no se encuentra el pedido"});
            
        }

        res.send(pedido);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al consultar el pedido");
    }
    
    }

//Eliminar un pedido  por su ID

exports.eliminarPedido = async(req,res) => {
    try {
        let pedido = await Pedido.findById(req.params.id);
        
        if(!pedido){

            res.status(404).json({msg:"no existe el pedido"});
            return
        }

        await Pedido.findOneAndDelete({_id:req.params.id});
        res.json({msg:"el pedido fue eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }

//Editar un pedido por su ID

exports.editarPedido = async(req,res) => {
    try {
        const{descripcion, imagen, cantidad, valor_total} = req.body;

        let pedido = await Pedido.findById(req.params.id);

                
        if(!pedido){

            res.status(404).json({msg:"no existe el pedido"});
            return
        }

        pedido.descripcion = descripcion;
        pedido.imagen = imagen;
        pedido.cantidad = cantidad;
        pedido.valor_total = valor_total;

        pedido = await Pedido.findOneAndUpdate({_id:req.params.id}, pedido,{new:true});
        res.json(pedido);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }