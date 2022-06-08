const Base  = require('../models/base');
const LugarVerificacion = require('../models/lugarverificacion');
const Rondin = require('../models/rondin');
const RutasRondin = require('../models/rutasrondin');
const Personal = require('../models/personal');
const Usuario = require('../models/usuario');
const Perfil = require('../models/perfil'); 
const Permiso = require('../models/permiso');
const Incidencia = require('../models/incidencia');
const RondinesHechos = require('../models/rondineshechos');

Base.hasMany(LugarVerificacion, {foreignKey: "id_base"});
LugarVerificacion.belongsTo(Base, {foreignKey: "id_base"})

Personal.hasOne(Usuario, {foreignKey: "id_personal"});
Usuario.belongsTo(Personal, {foreignKey: "id_personal"});

Perfil.hasOne(Usuario, {foreignKey: "id_perfil"});
Usuario.belongsTo(Perfil, {foreignKey: "id_perfil"});

Base.hasOne(Usuario, {foreignKey: "id_base"});
Usuario.belongsTo(Base, {foreignKey: "id_base"});

//perfil.addPermisos perfil.getpermisos
Perfil.belongsToMany(Permiso, { through: "PerfilPermisos"});
Permiso.belongsToMany(Perfil, { through: "PerfilPermisos"});

//rondis.addLugarVerificacion rondin.getLugarVerificacion
Rondin.belongsToMany(LugarVerificacion, { through: RutasRondin});
LugarVerificacion.belongsToMany(Rondin, { through: RutasRondin});

Base.hasMany(Rondin, {foreignKey: "id_base"});
Rondin.belongsTo(Base, {foreignKey: "id_base"});

Base.hasOne(Incidencia, {foreignKey: "id_base"});
Incidencia.belongsTo(Base, {foreignKey: "id_base"});

Rondin.hasOne(RondinesHechos, {foreignKey: "id_rondin"});
RondinesHechos.belongsTo(Rondin, {foreignKey: "id_rondin"});

Incidencia.hasOne(RondinesHechos, {foreignKey: "id_incidencia"});
RondinesHechos.belongsTo(Incidencia, {foreignKey: "id_incidencia"});

Usuario.hasOne(RondinesHechos, {foreignKey: "id_usuario"});
RondinesHechos.belongsTo(Usuario, {foreignKey: "id_usuario"});

LugarVerificacion.hasOne(RondinesHechos, {foreignKey: "id_lverificacion"});
RondinesHechos.belongsTo(LugarVerificacion, {foreignKey: "id_lverificacion"});

