//Consultar Citas

const Cita = require ('../models/citas');

exports.mostrarCitas = async(req,res) => {
try {
    const citas = await Cita.find();
    res.json(citas);
    
} catch (error) {
    console.log(error);
    res.status(500).send("Error al consultar la Cita");
}

}

//Agregar Cita

exports.agregarCitas = async(req,res) => {
    try {
        let cita;
        cita = new Cita(req.body)
    
        await cita.save();
        res.send(cita);
    
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al agregar los clientes");
    }
    
    }

//Consultar una cita por su ID

exports.unCita = async(req,res) => {
    try {
        let cita = await Cita.findById(req.params.id);
        
        if(!cita){

            res.status(404).json({msg:"no se encuentra la cita"});
            
        }

        res.send(cita);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al consultar la cita");
    }
    
    }

//Eliminar una Cita por su ID

exports.eliminarCita = async(req,res) => {
    try {
        let cita = await Cita.findById(req.params.id);
        
        if(!cita){

            res.status(404).json({msg:"no existe la cita"});
            return
        }

        await Cita.findOneAndDelete({_id:req.params.id});
        res.json({msg:"La cita fue eliminada"});

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }

//Editar una Cita por su ID

exports.editarCita = async(req,res) => {
    try {
        const{fecha_cita,hora_cita,nombres,apellidos,documento,area_visita,telefono} = req.body;

        let cita = await Cita.findById(req.params.id);

                
        if(!Cita){

            res.status(404).json({msg:"no existe la cita"});
            return
        }

        cita.fecha_cita= fecha_cita;
        cita.hora_cita= hora_cita;
        cita.nombres = nombres;
        cita.apellidos = apellidos;
        cita.documento = documento;
        cita.area_visita = area_visita;
        cita.telefono = telefono;

        cita = await Cita.findOneAndUpdate({_id:req.params.id}, cita,{new:true});
        res.json(cita);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error de conexion");
    }
    
    }
    