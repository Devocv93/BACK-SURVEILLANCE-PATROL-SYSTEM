const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');


const Personal = sequelizeRondin.define('personal', {
    nombre:{
        type: DataTypes.TEXT, 
    },
    apellido_paterno:{
        type: DataTypes.TEXT
    },
    apellido_materno:{
        type: DataTypes.TEXT
    },
    genero:{
        type: DataTypes.TEXT
    },
    fecha_ingreso:{
        type: DataTypes.DATEONLY, 
    },
    fecha_baja:{
        type: DataTypes.DATEONLY, 
        allowNull: true
    }
    }
)

module.exports = Personal;