const { request, response }= require('express'); 

const { 
    getAllLugaresVerificar,
    postLugarVerificacion,
    putLugarVerificacion,
    getQrCode,
    getLugaresVerificarById,
    deleteLugarVerificacionById,
    getLugaresVerificacionByBase,
 } = require('../services/lugarverificacion');

const  getLugaresVerificarByIdController = async(req = request, res= response)=>{
    try { 
        let result = await getLugaresVerificarById(req.params.id);
        if(result.data === null){
            res.status(404).send({msg: `No se encontro ningun registro con este id  ${req.params.id}`});
        }else res.status(200).send(result)
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Algo salio mal, verifique!"})
    }
}

const getLugaresVerificacionByBaseController = async(req = request, res= response)=>{
    try { 
        let result = await getLugaresVerificacionByBase(req.params.id); 
        res.status(200).send(result); 
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Algo salio mal, verifique!"})
    }
}

const getQrCodeController = async(req = request, res = response) =>{
    try {
        const result = await getQrCode(req.params.idLugarVerificacion);
        if(result.error===null){
            res.status(200).json(result);
        }else  res.status(404).json(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const getAllLugaresVerificarController = async(req = request, res = response) =>{
    try {
        const result = await getAllLugaresVerificar();
        res.status(200).send(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const postLugaresVerificarController = async(req = request, res = response) =>{
    try { 
        const {nombre, descripcion, id_base } = req.body; 
        let nuevoLugar = { nombre,descripcion, id_base }

        let result = await postLugarVerificacion(nuevoLugar);
        if(result.create){
            res.status(201).send({msg: "Se creo correctamente!"});
        }else res.status(400).send({msg: "Ya existe una base con el mismo nombre!"}) 
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const putLugaresVerificarController = async(req = request, res = response) =>{
    try {
        const {id} = req.params;
        const {nombre, descripcion, id_base } = req.body; 
        let editarLugar = { nombre,descripcion, id_base }

        const result = await putLugarVerificacion(editarLugar, id);
        if(result.error){
            res.status(404).json({
                msg: result.error
            });
        }else{
            res.status(200).json({
                msg: "Se actualizo correctamente"
            });
        }

    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Algo salio mal, verifique!" })
    }
}

const deleteLugarVerificacionByIdController = async(req = request, res = response) =>{
    try {
        const {id} = req.params; 
        const result = await deleteLugarVerificacionById(id);
        if(result.error){
            res.status(400).json({msg: result.error});
        }else{
            res.status(200).json({msg: "Se elimino correctamente"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Algo salio mal, verifique!" })
    }
}

module.exports = {
    getLugaresVerificarByIdController,
    getAllLugaresVerificarController,
    postLugaresVerificarController,
    putLugaresVerificarController,
    getQrCodeController,
    deleteLugarVerificacionByIdController,
    getLugaresVerificacionByBaseController
}
