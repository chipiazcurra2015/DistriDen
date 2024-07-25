const {Zona} = require ("../db");
const { Op, where } = require('sequelize');

const createZonaController = async ( localidad, provincia, codigoPostal )=>{
        await Zona.create({
            localidad, provincia, codigoPostal
        });

      return await Zona.findAll();
    };

const getZonasByName = async (localidad) => {

    const zonasName = await Zona.findAll({
        where:
        { localidad:
        {[Op.iLike]:
        `%${localidad}%`
    }}})

    return zonasName;
};
    
const getAllZonas = async () => {
    const zona = await Zona.findAll();
    return zona;
};

const getZonaById = async (id) => {
    const zonaFilter = await Zona.findAll({
      where: { id }
    });
  
    return zonaFilter;
  };

  const putZonas = async (id, editedData) => {
    try {
      const zona = await Zona.findByPk(id);
  
      if (!zona) {
        throw new Error('La zona no se encontró.');
      }
  
      if (editedData && typeof editedData === 'object') {
        zona.provincia = editedData.provincia;
        zona.codigoPostal = editedData.codigoPostal;
      }
  
      await zona.save();
  
      return zona;
    } catch (error) {
      throw new Error(`Error al actualizar la zona: ${error.message}`);
    }
  };

const deleteZonas = async(id) => await Zona.destroy({where: {id}});


module.exports = {
    createZonaController,
    getAllZonas,
    getZonaById,
    deleteZonas,
    putZonas,
    getZonasByName
};