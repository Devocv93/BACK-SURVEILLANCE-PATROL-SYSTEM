const express = require('express');
const usuarioRouter = express.Router();

const { 
    getUsuarioExisteController,
    getAllUsersByBaseController
 } = require('../controller/usuario.controller');


 usuarioRouter.get('/api/usuario/login/:correo/:password',  getUsuarioExisteController);
 usuarioRouter.get('/api/usuario/all/bybase/:idbase', getAllUsersByBaseController);

module.exports = usuarioRouter;