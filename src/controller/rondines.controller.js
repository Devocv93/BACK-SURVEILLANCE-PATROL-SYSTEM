const { request, response } = require("express");

const {
    postRondin,
    putRondin,
    getAllRondinByBase,
    getRondinById,
    getAllRondines,
    getAllRutasRondinByRondin,
    deleteRondinById,
} = require('../services/rondin');

const getAllRondinesController = async(req = request, res = response) =>{
    try { 
        const result = await getAllRondines();
        res.status(200).send(result); 
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const getRondinByIdController = async(req = request, res = response) =>{
    try {
        const {id} = req.params;  
        const result = await getRondinById(id);
        if(result.error){
            res.status(404).json(result);
        }else{
            res.status(200).json(result);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const getAllRondinesByBaseController = async(req = request, res = response) =>{
    try {
        const {id} = req.params;
        const result = await getAllRondinByBase(id);
        res.status(200).send(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const getAllRutasRondinByRondinController = async(req = request, res = response) =>{
    try {
        const {id} = req.params;
        const result = await getAllRutasRondinByRondin(id);
        if(result.error){
            res.send(404).send({msg: result.error});
        }else{
            res.status(200).send(result.data);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const postRondinController =  async(req = request, res = response)=>{
    try {
        const {nombre, id_base} = req.body;
        let data = {nombre, id_base};
        const response = await postRondin(data);
        res.status(201).json({
            msg: "Se guardo correctamente",
            idRondin: response.id,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Algo salio mal, verifique"
        })
    }
}

const putRondinController = async(req = request, res = response) =>{
    try {
        const {id} = req.params;
        const {nombre, id_base } = req.body; 
        let editarRondin = { nombre, id_base }

        const result = await putRondin(editarRondin, id);
        if(result.error){
            res.status(404).json({
                msg: result.error
            });
        }else{
            res.status(200).json({
                msg: "Se actualizo correctamente",
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const deleteRondinByIdController = async(req = request, res = response)=>{
    try {
        const id = req.params.id
        const result = await deleteRondinById (id);
        if(result.error === null) res.status(200).json({msg: "ok"}); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Algo salio mal verifique!"
        })
    }
}
 
module.exports = {
    postRondinController,
    putRondinController,
    getAllRondinesByBaseController,
    getRondinByIdController,
    getAllRondinesController,
    getAllRutasRondinByRondinController,
    deleteRondinByIdController
}