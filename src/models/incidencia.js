const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');


const Incidencia = sequelizeRondin.define('incidencia', {
    nombre:{
        type: DataTypes.TEXT, 
    },
    descripcion:{
        type: DataTypes.TEXT, 
    },
    estatus:{
        type: DataTypes.INTEGER, 
    }, 
    id_base:{
        type: DataTypes.INTEGER
    }
})

module.exports = Incidencia;