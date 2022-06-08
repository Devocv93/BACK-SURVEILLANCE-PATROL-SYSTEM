const Incidencia = require('../models/incidencia');
const Base = require('../models/base');

const getAllIncidencias = async()=>{
    try {
        const incidencias = await Incidencia
                        .findAll({
                            include: {
                                model: Base,
                                attributes: ['nombre']
                            }
                        }); 

        let data = incidencias.map(incidencia =>{
            return {
                id: incidencia.id,
                nombre: incidencia.nombre,
                id_base: incidencia.id_base,
                base: incidencia.base.dataValues.nombre,
                descripcion: incidencia.descripcion,
                estatus: incidencia.estatus === 1 ? "ACTIVO" : "INACTIVO",
                status: incidencia.estatus
            }
        })

        return data;
    } catch (error) { 
        throw new Error(error)
    }
}

const getIncidenciasByBase = async(idBase)=>{
    try {
        const incidencias = await Incidencia
                        .findAll({
                            where: { id_base: idBase},  
                        });  
        let data = incidencias.map(incidencia =>{
            return {
                id: incidencia.id,
                nombre: incidencia.nombre,
                id_base: incidencia.id_base, 
                descripcion: incidencia.descripcion,
                estatus: incidencia.estatus === 1 ? "ACTIVO" : "INACTIVO",
                status: incidencia.estatus
            }
        })

        return data;
    } catch (error) { 
        throw new Error(error)
    }
}

const getIncidenciaById = async(idIncidencia)=>{
    try {
        const result = {error: null, data: null}
        const lugar = await Incidencia.findByPk(idIncidencia); 
        if(lugar) result.data = lugar;
        return result;
    } catch (error) { 
        throw new Error(error)
    }
}

const postIncidencia =async(data)=>{
    try { 
        const result = {error: null, create: null}
        const [base, created] = await Incidencia.findOrCreate({
            where: { 
                nombre: data.nombre,
                id_base: data.id_base,
            },
            defaults: {
                nombre: data.nombre,
                descripcion: data.descripcion,
                estatus: data.estatus,
                id_base: data.id_base,
            }
        });
        result.create = created;
        return result
      
    } catch (error) {
        throw new Error(error);
    }
}

const putIncidencia =async(data, id)=>{
    try {
        console.log(id)
        const result = {error: null}
        const incidencia = await Incidencia.findByPk(id)
        if(!incidencia){
           result.error = "No existe el registro con el id "+id;
           return result
        }
        
        await incidencia.update(data); 
        return result
    } catch (error) {
        throw new Error(error);
    }
}

module.exports ={
    postIncidencia,
    getAllIncidencias,
    getIncidenciaById,
    putIncidencia,
    getIncidenciasByBase
}