const { request, response }= require('express'); 

const { 
    postIncidencia, 
    getAllIncidencias,
    getIncidenciaById,
    putIncidencia,
    getIncidenciasByBase
} = require('../services/incidencia');

const postIncidenciaController = async(req = request, res = response) =>{
    try { 
        const {nombre, descripcion, estatus, id_base } = req.body; 
        let incidencia = { nombre,descripcion, estatus, id_base }

        let result = await postIncidencia(incidencia);
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

const  getIncidenciaByIdController = async(req = request, res= response)=>{
    try { 
        let result = await getIncidenciaById(req.params.id);
        if(result.data === null){
            res.status(404).send({msg: `No se encontro ningun registro con este id  ${req.params.id}`});
        }else res.status(200).send(result)
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Algo salio mal, verifique!"})
    }
}

const getAllIncidenciasController = async(req = request, res = response) =>{
    try {
        const result = await getAllIncidencias();
        res.status(200).send(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const getIncidenciasByBaseController = async(req = request, res = response) =>{
    try { 
        const result = await getIncidenciasByBase(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const putIncidenciaController = async(req = request, res = response) =>{
    try { 
        const { nombre, descripcion, estatus } = req.body; 
        let incidencia = {nombre,descripcion, estatus }

        const result = await putIncidencia(incidencia, req.params.id);
        if(result.error){
            res.status(404).json({msg: result.error});
        }else{
            res.status(200).json({msg: "Se actualizo correctamente"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Algo salio mal, verifique!" })
    }
}

module.exports = {
    postIncidenciaController,
    getAllIncidenciasController,
    getIncidenciaByIdController,
    putIncidenciaController,
    getIncidenciasByBaseController
}