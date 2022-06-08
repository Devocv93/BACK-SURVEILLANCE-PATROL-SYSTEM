const { request, response }= require('express'); 

const {  
    postRondinDone, 
    getAll,
    getAllRondinesByBase,
    getAllRondinesByRuta
} = require('../services/rondineshechos');

const postRondinDoneController = async(req = request, res = response) =>{
    try { 
        const data = req.body;   
        await postRondinDone(data);
        res.status(201).send({msg: "Se creo correctamente!"});  
    } catch (error) { 
        return res.status(500).send({
            msg: "Algo salio mal, verifique!",
            err: error
        })
    }
}

const getAllRondinesHechosController = async(req = request, res= response)=>{
    try { 
        const { finicio, ffin } = req.params;
        
        let result = await getAll(finicio, ffin); 
            res.status(200).send(result); 
    } catch (error) { 
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!" 
        })
    }
}

const getAllRondinesHechosByBaseController = async(req = request, res= response)=>{
    try { 
        const { finicio, ffin, idbase } = req.params;
        
        let result = await getAllRondinesByBase(finicio, ffin, idbase); 
            res.status(200).send(result); 
    } catch (error) { 
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!" 
        })
    }
}

const getAllRondinesHechosByRutaController = async(req = request, res= response)=>{
    try { 
        const { finicio, ffin, idruta } = req.params;
        
        let result = await getAllRondinesByRuta(finicio, ffin, idruta); 
            res.status(200).send(result); 
    } catch (error) { 
        console.log(error)
        return res.status(500).send({
            msg: "Algo salio mal, verifique!" 
        })
    }
}

module.exports = { 
    postRondinDoneController,
    getAllRondinesHechosController,
    getAllRondinesHechosByBaseController,
    getAllRondinesHechosByRutaController
}