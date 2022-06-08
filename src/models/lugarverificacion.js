const { Sequelize, Model, DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');

const Lugarverificacion = sequelizeRondin.define('lugarverificacion',{
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING, 
    },
    id_base:{
        type: DataTypes.INTEGER
    }, 
})

module.exports = Lugarverificacion;