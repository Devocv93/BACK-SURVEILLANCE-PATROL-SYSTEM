const express = require('express');
const incidencia = express.Router();

const { 
    postIncidenciaController, 
    getAllIncidenciasController,
    getIncidenciaByIdController,
    putIncidenciaController,
    getIncidenciasByBaseController
} = require('../controller/incidencia.controller');

incidencia.get('/api/incidencia', getAllIncidenciasController);
incidencia.get('/api/incidencia/bybase/:id', getIncidenciasByBaseController);
incidencia.get('/api/incidencia/:id', getIncidenciaByIdController);
incidencia.post('/api/incidencia', postIncidenciaController);
incidencia.put('/api/incidencia/:id', putIncidenciaController);
 
module.exports = incidencia;