const express = require('express');
const rondinesRouter = express.Router();

const { 
    getAllRondinesController,
    postRondinController,
    putRondinController,
    getAllRondinesByBaseController,
    getRondinByIdController,
    getAllRutasRondinByRondinController,
    deleteRondinByIdController
} = require('../controller/rondines.controller');

rondinesRouter.get('/api/rondin', getAllRondinesController);
rondinesRouter.post('/api/rondin', postRondinController);
rondinesRouter.put('/api/rondin/:id', putRondinController);
rondinesRouter.get('/api/rondin/bybase/:id', getAllRondinesByBaseController);
rondinesRouter.get('/api/rondin/byid/:id', getRondinByIdController);
rondinesRouter.get('/api/rondin/:id/rutasrondin', getAllRutasRondinByRondinController);
rondinesRouter.delete('/api/rondin/:id', deleteRondinByIdController);

module.exports = rondinesRouter;