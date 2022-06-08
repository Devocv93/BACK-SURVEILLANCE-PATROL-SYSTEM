const Rondin = require('../models/rondin');
const Base = require('../models/base'); 

const getAllRutasRondinByRondin = async(idRondin)=>{
    try {
        const result = {error: null, data: null}
        const rondin = await Rondin.findByPk(idRondin); 

        if(!rondin){
            result.error = "Usuario no encontrado"
            return result;
        }else{
            let rutasrondin = await rondin.getLugarverificacions({attributes: ['nombre']});
            const rutas = rutasrondin.map(rutas => {
                return {
                    nombre: rutas.nombre,
                    orden: rutas.rutasrondins.orden,
                    id: rutas.rutasrondins.lugarverificacionId,
                    idLugarVe: rutas.rutasrondins.id,
                }
            }); 

            result.data = rutas;
            return result;
        } 
    } catch (error) { 
        throw new Error(error)
    }
}

const getAllRondines = async()=>{
    try {
        const result = {error: null, rondins: null}
        const rondines = await Rondin.findAll({
            include: {
                model: Base,
                attributes: ["nombre"]
            },  
        });
 
        let data = rondines.map(rondin => {
            return  {
                id: rondin.id,
                nombre: rondin.nombre,
                id_base: rondin.id_base,
                base: rondin.base.dataValues.nombre 
            }
        })

        result.rondins = data;
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const getRondinById = async(id)=>{
    try {
        const result = {error: null, data: null}
        const rondin = await Rondin
                        .findByPk(id);
        if(!rondin){
            result.error = "No existe el usuario con el id "+id;
            return result
        }

        result.data = rondin;
        
        return result;
    } catch (error) { 
        throw new Error(error)
    }
}

const getAllRondinByBase = async(id)=>{
    try {
        const rondines = await Rondin
                        .findAll({
                            where:{
                                id_base: id
                            }
                        });
        return rondines;
    } catch (error) { 
        throw new Error(error)
    }
}

const postRondin = async(data)=>{
    try { 
        const rondin = new Rondin(data);
        await rondin.save();
        return rondin;
    } catch (error) { 
        throw new Error(error)
    }
}

const putRondin =async(data, id)=>{
    try {
        const result = {error: null}
        const rondin = await Rondin.findByPk(id)
        if(!rondin){
           result.error = "No existe el usuario con el id "+id;
           return result
        }
        
        await rondin.update(data); 
        return result
    } catch (error) {
        throw new Error(error);
    }
}

const deleteRondinById =async(id)=>{
    try {
        const result = {error: null}
        await Rondin.destroy({
            where: {id: id}
        })  
        return result
    } catch (error) {
        throw new Error(error);
    }
}


module.exports ={
    getAllRondines,
    postRondin,
    putRondin,
    getAllRondinByBase,
    getRondinById,
    getAllRutasRondinByRondin,
    deleteRondinById,
}