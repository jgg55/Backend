//Consultar Usuarios

const Usuario = require ('../models/Usuarios');

exports.mostrarUsuario = async(req,res) => {
try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
    
} catch (error) {
    console.log(error);
    res.status(500).send("Error al consultar los Usuarios");
}

}

//Agregar proveedores 

exports.agregarUsuarios = async(req,res) => {
try {
    let usuario;
    usuario = new Usuario(req.body)

    await usuario.save();
    res.send(usuario);

} catch (error) {
    console.log(error);
    res.status(500).send("Error al agregar el Usuario");
}

}

//Consultar un Usuario por su ID

exports.unUsuario = async(req,res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);
        
        if(!usuario ){

            res.status(404).json({msg:"no se encuentra el usuario"});
            
        }

        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al consultar el usuario");
    }
    
    }

//Eliminar un usuario  por su ID

exports.eliminarUsuario= async(req,res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);
        
        if(!usuario){

            res.status(404).json({msg:"no existe el Usuario"});
            return
        }

        await Usuario.findOneAndDelete({_id:req.params.id});
        res.json({msg:"el usuario fue eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }

//Editar un usuario  por su ID

exports.editarUsuario = async(req,res) => {
    try {
        const{nombre_usuario, contraseña,rol} = req.body;

        let usuario = await Usuario.findById(req.params.id);

                
        if(!usuario){

            res.status(404).json({msg:"no existe el usuario"});
            return
        }

        usuario.nombre_usuario = nombre_usuario;
        usuario.contraseña = contraseña;
        usuario.rol = rol;
        
        usuario = await Usuario.findOneAndUpdate({_id:req.params.id}, usuario,{new:true});
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }