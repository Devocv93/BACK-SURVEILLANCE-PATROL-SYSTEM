const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');


const Usuario = sequelizeRondin.define('usuario', {
    supervisor:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    estatus:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    email:{
        type: DataTypes.TEXT,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: DataTypes.TEXT
    },
    id_perfil:{
        type: DataTypes.INTEGER
    },
    id_personal:{
        type: DataTypes.INTEGER
    },
    id_base:{
        type: DataTypes.INTEGER
    }
})

module.exports = Usuario;