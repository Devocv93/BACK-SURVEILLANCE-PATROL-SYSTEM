const {request, response} = require('express');

const { 
    getAllBases,
    postBase,
    getBaseById,
    updateBase,

} = require('../services/base');

const postBaseController = async(req = request, res= response)=>{
    try { 
        let result = await postBase(req.body);
        if(result.create){
            res.status(201).send({msg: "Se creo correctamente!"});
        }else res.status(400).send({msg: "Ya existe una base con el mismo nombre!"})
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Algo salio mal, verifique!"})
    }
}

const getAllBaseController = async(req = request, res= response)=>{
    try { 
        let result = await getAllBases();
        if(result.error === null){
            res.status(200).send(result);
        }else res.status(400).send(result)
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Algo salio mal, verifique!"})
    }
}

const getBaseByIdController = async(req = request, res= response)=>{
    try { 
        let result = await getBaseById(req.params.id);
        if(result.data === null){
            res.status(404).send({msg: `No se encontro ningun registro con este id  ${req.params.id}`});
        }else res.status(200).send(result)
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Algo salio mal, verifique!"})
    }
}

const updateBaseByIdController = async(req = request, res= response)=>{
    try { 
        const { id, nombre } = req.params
        let data = {id, nombre}
        let result = await updateBase(data);
        if(result.error === null){
            res.status(200).send({msg: `Se actualizo correctamente`});
        }else res.status(400).send(result)
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Algo salio mal, verifique!"})
    }
}

module.exports = {
    getAllBaseController,
    getBaseByIdController,
    postBaseController,
    updateBaseByIdController,
}