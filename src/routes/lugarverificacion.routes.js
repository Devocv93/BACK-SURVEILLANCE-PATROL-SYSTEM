const express = require('express');
const lugarVerificacion = express.Router();

const { 
    getLugaresVerificarByIdController,
    getAllLugaresVerificarController,
    postLugaresVerificarController,
    putLugaresVerificarController,
    getQrCodeController,
    deleteLugarVerificacionByIdController,
    getLugaresVerificacionByBaseController
} = require('../controller/lugarverificacion.controller');

lugarVerificacion.get('/api/lugarverificacion', getAllLugaresVerificarController);
lugarVerificacion.get('/api/lugarverificacion/bybase/:id', getLugaresVerificacionByBaseController);
lugarVerificacion.get('/api/lugarverificacion/:id', getLugaresVerificarByIdController);
lugarVerificacion.post('/api/lugarverificacion', postLugaresVerificarController);
lugarVerificacion.put('/api/lugarverificacion/:id', putLugaresVerificarController);
lugarVerificacion.get('/api/lugarverificacion/codigoqr/:idLugarVerificacion', getQrCodeController);
lugarVerificacion.delete('/api/lugarverificacion/:id', deleteLugarVerificacionByIdController);

module.exports = lugarVerificacion;