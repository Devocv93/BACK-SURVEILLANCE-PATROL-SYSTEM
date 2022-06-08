const { DataTypes } = require("sequelize");
const {sequelizeRondin} = require('../database/connection');


const RondinesHechos = sequelizeRondin.define('rondineshecho', {
    id_rondin:{
        type: DataTypes.INTEGER, 
    },
    id_lverificacion:{
        type: DataTypes.INTEGER, 
    },
    id_incidencia:{
        type: DataTypes.INTEGER, 
    }, 
    id_usuario:{
        type: DataTypes.INTEGER, 
    },
    observacion:{
        type: DataTypes.TEXT
    },
    fh_creacion:{
        type: DataTypes.DATE
    },
    id_base:{
        type: DataTypes.INTEGER
    }
})

module.exports = RondinesHechos;