const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');


const Rondin = sequelizeRondin.define('rondin',{
    nombre:{
        type: DataTypes.STRING
    },
    id_base:{
        type: DataTypes.INTEGER
    }
})

module.exports = Rondin;