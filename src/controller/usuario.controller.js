const { request, response }= require('express');
const { getUsuarioExiste, getAllUsuarioByBase } = require('../services/usuario');

const getUsuarioExisteController = async(req = request, res = response)=>{
    try {
        const result = await getUsuarioExiste(req.params.correo, req.params.password);
        if(result.error === null){
            res.status(200).json(result);
        }else{
            res.status(404).json(result);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Algo salio mal, verifique!"
        })
    }
}

const getAllUsersByBaseController = async(req = request, res = response) =>{
    try {
        const {idbase} = req.params;
        const result = await getAllUsuarioByBase(idbase);
        res.status(200).send(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!"
        })
    }
}

module.exports = {
    getUsuarioExisteController,
    getAllUsersByBaseController
}