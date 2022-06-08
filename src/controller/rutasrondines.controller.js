const { response, request } = require("express");
const { 
    postRutasRondin,
    putRutasRondin,
    deleteRutaRondin,
    deleteRutasRondinByRondin,

} = require("../services/rutasrondines");

const postRutaRondinController = async(req = request, res = response)=>{
    try {
        const {orden, rondinId, lugarverificacionId} = req.body;
        const data = {orden, rondinId, lugarverificacionId};

        const result = await postRutasRondin(data);
        if(result.error === null) res.status(201).json();
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Algo salio mal verifique!"
        })
    }
}

const putRutaRondinController = async(req = request, res = response)=>{
    try {
        const {orden, id} = req.body;
        const data = {orden, id};

        const result = await putRutasRondin(data);
        if(result.error === null) res.status(200).json({msg: "ok"});
        else res.status(404).send({msg: result.error})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Algo salio mal verifique!"
        })
    }
}

const deleteRutaRondinController = async(req = request, res = response)=>{
    try {
        const id = req.params.id

        const result = await deleteRutaRondin(id);
        if(result.error === null) res.status(200).json({msg: "ok"}); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Algo salio mal verifique!"
        })
    }
}

const deleteRutaRondinByRondinController = async(req = request, res = response)=>{
    try {
        const idRondin = req.params.idRondin
        const result = await deleteRutasRondinByRondin(idRondin);
        if(result.error === null) res.status(200).json({msg: "ok"}); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Algo salio mal verifique!"
        })
    }
}

module.exports = {
    postRutaRondinController,
    putRutaRondinController,
    deleteRutaRondinController,
    deleteRutaRondinByRondinController
}
