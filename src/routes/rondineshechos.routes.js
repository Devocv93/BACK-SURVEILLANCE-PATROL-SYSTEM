const express = require('express');
const rondineshechos = express.Router();

const {  
    postRondinDoneController,
    getAllRondinesHechosController,
    getAllRondinesHechosByBaseController,
    getAllRondinesHechosByRutaController
} = require('../controller/rondineshechos.controller'); 
 
rondineshechos.post('/api/rondinhecho', postRondinDoneController); 
rondineshechos.get('/api/rondinhecho/all/:finicio/:ffin', getAllRondinesHechosController); 
rondineshechos.get('/api/rondinhecho/bybase/:finicio/:ffin/:idbase', getAllRondinesHechosByBaseController); 
rondineshechos.get('/api/rondinhecho/byruta/:finicio/:ffin/:idruta', getAllRondinesHechosByRutaController); 
 
module.exports = rondineshechos;