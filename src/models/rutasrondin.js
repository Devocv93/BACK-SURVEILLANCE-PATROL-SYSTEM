const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');


const Rutasrondin = sequelizeRondin.define('rutasrondins',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    orden:{
        type: DataTypes.INTEGER
    }
})

module.exports = Rutasrondin;