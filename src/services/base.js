const Base = require('../models/base');

const postBase = async(bases)=>{
    try {
        const result = {error: null, create: null}
        const [base, created] = await Base.findOrCreate({
            where: { nombre: bases.nombre },
            defaults: {
              nombre: bases.nombre
            }
        });
        result.create = created;
        return result
    } catch (error) {
        throw new Error(error);
    }
}

const getAllBases =async()=>{
    const result = {error: null, data: null}
    try {
        const base = await Base.findAll();
        if(!base) result.data = [];
        else result.data = base
        return result
    } catch (error) {
        result.error = error;
        return result;
    }
}

const getBaseById =async(idBase)=>{
    const result = {error: null, data: null}
    try {
        const base = await Base.findByPk(idBase);
        if(base) result.data = base;
        return result;
    } catch (error) {
        result.error = error;
        return result;
    }
}

const updateBase =async(base)=>{
    const result = {error: null, data: null}
    try {
        let baseToUpdate = await Base.findOne({
            where: {id: base.id}
        });

        if(baseToUpdate) {
            baseToUpdate.nombre = base.nombre;
            baseToUpdate.save();
            return result;
        }else{
            result.error = "No se encontro el registro";
            return result;
        }
    } catch (error) {
        result.error = error;
        return result;
    }
}

module.exports = {
    getAllBases,
    postBase,
    getBaseById,
    updateBase
}