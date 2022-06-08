const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');

const Permiso = sequelizeRondin.define('permiso',{
    codigo:{
        type: DataTypes.STRING
    }, 
    modulo:{
        type: DataTypes.STRING
    }, 
    descripcion:{
        type: DataTypes.STRING
    }
}) 

module.exports = Permiso;