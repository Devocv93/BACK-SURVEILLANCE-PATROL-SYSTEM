const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');


const Base = sequelizeRondin.define('base',{
    nombre:{
        type: DataTypes.STRING
    }, 
})

module.exports = Base;