const express = require('express');
const rutasRondinesRouter = express.Router();

const { 
    postRutaRondinController,
    putRutaRondinController,
    deleteRutaRondinController,
    deleteRutaRondinByRondinController
} = require('../controller/rutasrondines.controller');

rutasRondinesRouter.post('/api/rutasrondin',postRutaRondinController); 
rutasRondinesRouter.put('/api/rutasrondin',putRutaRondinController);
rutasRondinesRouter.delete('/api/rutasrondin/:id',deleteRutaRondinController);
rutasRondinesRouter.delete('/api/rutasrondin/byrondin/:idRondin',deleteRutaRondinByRondinController);

module.exports = rutasRondinesRouter;