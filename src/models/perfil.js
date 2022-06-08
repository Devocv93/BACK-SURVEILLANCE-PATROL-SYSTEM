const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');

const Perfil = sequelizeRondin.define('perfil',{
    nombre:{
        type: DataTypes.STRING
    }, 
}) 

module.exports = Perfil;