const QRCode = require('qrcode');
const Lugarverificacion = require('../models/lugarverificacion');
const Base = require('../models/base');
const RutasRondin = require('../models/rutasrondin');

const getAllLugaresVerificar = async()=>{
    try {
        const lugares = await Lugarverificacion
                        .findAll({
                            include: {
                                model: Base,
                                attributes: ['nombre']
                            }
                        }); 

        let data = lugares.map(lugar =>{
            return {
                id: lugar.id,
                lugar: lugar.nombre,
                id_base: lugar.id_base,
                base: lugar.base.dataValues.nombre,
                descripcion: lugar.descripcion
            }
        })

        return data;
    } catch (error) { 
        throw new Error(error)
    }
}

const getLugaresVerificacionByBase = async(idBase)=>{
    try {
        const lugares = await Lugarverificacion.findAll({
                        where: {id_base: idBase }
                        }); 
        return lugares;
    } catch (error) { 
        throw new Error(error)
    }
}

const getLugaresVerificarById = async(idLugarVerificacion)=>{
    try {
        const result = {error: null, data: null}
        const lugar = await Lugarverificacion.findByPk(idLugarVerificacion); 
        if(lugar) result.data = lugar;
        return result;
    } catch (error) { 
        throw new Error(error)
    }
}

const getQrCode = async(idLugarVerificacion)=>{
    try {
        const result = {error: null, codigoqr: null}
        const lugar = await Lugarverificacion.findOne({
            include: {
                model: Base,
                attributes: ['nombre']
            },
            where:{
                id: idLugarVerificacion
            }
        })
        if(!lugar){
            result.error = "No existe el usuario con el id "+idLugarVerificacion;
            return result
        }

        const codigo = {
            idLugar: lugar.id,
            nombreLugar: lugar.nombre,
            base: lugar.base.nombre, 
        }

        const srtringData = JSON.stringify(codigo);
        result.codigoqr = await QRCode.toDataURL(srtringData);
        return result;
         
    } catch (error) { 
        throw new Error(error)
    }
}
 
const postLugarVerificacion =async(data)=>{
    try { 
        const result = {error: null, create: null}
        const [base, created] = await Lugarverificacion.findOrCreate({
            where: { 
                nombre: data.nombre,
                id_base: data.id_base,
            },
            defaults: {
                nombre: data.nombre,
                descripcion: data.descripcion,
                id_base: data.id_base, 
            }
        });
        result.create = created;
        return result
      
    } catch (error) {
        throw new Error(error);
    }
}

const putLugarVerificacion =async(data, id)=>{
    try {
        const result = {error: null}
        const lugar = await Lugarverificacion.findByPk(id)
        if(!lugar){
           result.error = "No existe el registro con el id "+id;
           return result
        }
        
        await lugar.update(data); 
        return result
    } catch (error) {
        throw new Error(error);
    }
}

const deleteLugarVerificacionById = async(idLugarVerificacion)=>{
    try {
        const result = {error: null, data: null}
        const isInRondin = await RutasRondin.findAll({
            where: {lugarverificacionId: idLugarVerificacion}
        }) 
        if(isInRondin.length > 0){
            result.error = "No se puede eliminar porque ya se esta utilizando en los rondines"
            return result;
        }else{ 
            await Lugarverificacion.destroy({
                where:{id: idLugarVerificacion}
            })

            return result;
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getAllLugaresVerificar,
    postLugarVerificacion,
    putLugarVerificacion,
    getQrCode,
    getLugaresVerificarById,
    deleteLugarVerificacionById,
    getLugaresVerificacionByBase
}