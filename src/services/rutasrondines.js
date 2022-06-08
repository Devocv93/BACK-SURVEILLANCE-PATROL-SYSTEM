const Rutasrondin = require('../models/rutasrondin');

const postRutasRondin = async(data)=>{
    try {
        const result = {error: null}
        await Rutasrondin.create({
            orden: data.orden,
            rondinId: data.rondinId,
            lugarverificacionId: data.lugarverificacionId,
        })

        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const putRutasRondin =async(data)=>{
    try {
        const result = {error: null}
        const rutas = await Rutasrondin.findByPk(data.id)
        if(!rutas){
           result.error = "No existe el registro con el id "+data.id;
           return result
        }
        
        await rutas.update({orden: data.orden}); 
        return result
    } catch (error) {
        throw new Error(error);
    }
}

const deleteRutaRondin =async(id)=>{
    try {
        const result = {error: null}
        await Rutasrondin.destroy({
            where: {id: id}
        })  
        return result
    } catch (error) {
        throw new Error(error);
    }
}

const deleteRutasRondinByRondin =async(idRondin)=>{
    try {
        const result = {error: null}
        await Rutasrondin.destroy({
            where: {rondinId: idRondin}
        })  
        return result
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    postRutasRondin, 
    putRutasRondin,
    deleteRutaRondin,
    deleteRutasRondinByRondin
}