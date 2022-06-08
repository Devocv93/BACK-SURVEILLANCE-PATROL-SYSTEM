const Perfil = require('../models/perfil');  
const Usuario = require('../models/usuario');
const Base = require('../models/base');
const Personal = require('../models/personal');
 

const getUsuarioExiste = async(correo, password)=>{
    try {
        const result = {error: null, data: null}
        let user = await Usuario.findOne({
            include: {model: Base, attributes:['nombre']},
            where: {email: correo, password: password },
            attributes: ['id', 'supervisor', 'estatus', 'email', 'id_perfil', 'id_base'],
        });
        
        if(!user){
            result.error = "Usuario no encontrado"
            return result;
        }else{
            if(user.dataValues.estatus === false){
                result.error = "El usuario esta dado de baja";
                return result;
            }else{
                let perfil = await Perfil.findOne({
                    where: {id: user.dataValues.id_perfil},
                    attributes: ['nombre','id']
                });
                let permisos = await perfil.getPermisos({attributes: ['codigo', ]});
                
                const permiss = permisos.map(p => p.codigo);
   
                let usuario= {
                    id: user.id,
                    supervisor: user.supervisor,
                    estatus: user.estatus,
                    email: user.email,
                    perfil: perfil.nombre,
                    idBase: user.id_base,
                    base: user.dataValues.base.dataValues.nombre,
                    permisos: permiss,
                }
                
                result.data = {usuario} 
                return result; 
            }
        }
    } catch (error) { 
        throw new Error(error);
    }
}

const getAllUsuarioByBase = async(idbase)=>{
    try {
        const rondines = await Usuario
                        .findAll({
                            include:{
                                model: Personal,
                                attributes: ['nombre'] 
                            },
                            where:{
                                id_base: idbase
                            }
                        });
        return rondines;
    } catch (error) { 
        throw new Error(error)
    }
}

module.exports = {
    getUsuarioExiste,
    getAllUsuarioByBase
}