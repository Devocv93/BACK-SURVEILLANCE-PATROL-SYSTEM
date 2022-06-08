const { Op } = require("sequelize");

const RondinesHechos = require('../models/rondineshechos'); 
const Rondin = require('../models/rondin'); 
const LugarVerificacion = require('../models/lugarverificacion'); 
const Incidencia = require('../models/incidencia'); 
const Usuario = require('../models/usuario'); 
const Personal = require('../models/personal'); 
const Base = require('../models/base'); 


const postRondinDone =async(data)=>{
    try { 
        await RondinesHechos.create({
            id_rondin: data.id_rondin,
            id_lverificacion: data.id_lverificacion,
            id_incidencia: data.id_incidencia,
            id_usuario: data.id_usuario,
            observacion: data.observacion,
            fh_creacion: data.fh_creacion,
            id_base: data.id_base
        })
    } catch (error) {
        throw new Error(error);
    }
}

const getAll = async(finicio, ffin)=>{
    try { 
        const incidencias = await RondinesHechos
                        .findAll({  
                            include: [
                                {
                                    model: Rondin, 
                                    attributes:['nombre'], 
                                },
                                {
                                    model: LugarVerificacion,
                                    attributes:['nombre'],
                                },
                                {
                                    model: Incidencia,
                                    attributes:['nombre'],
                                },
                                {
                                    model: Usuario,
                                    attributes: ['email'], 
                                    include: [{
                                        model: Personal, 
                                        attributes: ['nombre','apellido_paterno', 'apellido_materno']}]
                                },

                            ],  
                            where:{
                                createdAt:{
                                    [Op.between]: [finicio, ffin]
                                } 
                            }
                        });   

        return incidencias;
    } catch (error) { 
        throw new Error(error)
    }
}

const getAllRondinesByBase = async(finicio, ffin, id_base)=>{
    try { 
        const incidencias = await RondinesHechos
                        .findAll({  
                            include: [
                                {
                                    model: Rondin, 
                                    attributes:['nombre'],
                                },
                                {
                                    model: LugarVerificacion,
                                    attributes:['nombre'],
                                },
                                {
                                    model: Incidencia,
                                    attributes:['nombre'],
                                },
                                {
                                    model: Usuario,
                                    attributes: ['email'], 
                                    include: [{
                                        model: Personal, 
                                        attributes: ['nombre','apellido_paterno', 'apellido_materno']}]
                                },

                            ],  
                            where:{
                                [Op.and]: [
                                    {
                                        id_base: id_base
                                    },
                                    {
                                        fh_creacion:{
                                            [Op.between]: [finicio, ffin]
                                        }
                                    }
                                ],
                                  
                            }
                        });   

        return incidencias;
    } catch (error) { 
        throw new Error(error)
    }
}

const getAllRondinesByRuta = async(finicio, ffin, idruta)=>{
    try { 
        const incidencias = await RondinesHechos
                        .findAll({  
                            include: [
                                {
                                    model: Rondin, 
                                    attributes:['nombre'],
                                },
                                {
                                    model: LugarVerificacion,
                                    attributes:['nombre'],
                                },
                                {
                                    model: Incidencia,
                                    attributes:['nombre'],
                                },
                                {
                                    model: Usuario,
                                    attributes: ['email'], 
                                    include: [{
                                        model: Personal, 
                                        attributes: ['nombre','apellido_paterno', 'apellido_materno']}]
                                },

                            ],  
                            where:{
                                [Op.and]: [
                                    {
                                        id_rondin: idruta
                                    },
                                    {
                                        fh_creacion:{
                                            [Op.between]: [finicio, ffin]
                                        }
                                    }
                                ],
                                  
                            }
                        });   

        return incidencias;
    } catch (error) { 
        throw new Error(error)
    }
}

module.exports ={
    postRondinDone, 
    getAll,
    getAllRondinesByBase,
    getAllRondinesByRuta
}