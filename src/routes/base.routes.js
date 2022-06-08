const express = require('express');
const baseRouter = express.Router();

const {
    getAllBaseController,
    postBaseController,
    getBaseByIdController,
    updateBaseByIdController,
}=require('../controller/base.controller'); 

baseRouter.post('/api/base/post', postBaseController);
baseRouter.get('/api/base/getallbase', getAllBaseController);
baseRouter.get('/api/base/getbasebyid/:id', getBaseByIdController);
baseRouter.get('/api/base/updatebasebyid/:id/:nombre', updateBaseByIdController);

module.exports = baseRouter;
