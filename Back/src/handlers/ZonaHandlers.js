const { createZonaController, getZonasByName, getAllZonas, deleteZonas, getZonaById, putZonas} = require ("../controllers/ZonaController")

const createZonaHandler = async (req , res) => {
    try {
        const { localidad, provincia, codigoPostal } = req.body
        const response = await createZonaController( localidad, provincia, codigoPostal );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};

const getZonasHandler = async (req, res) => {
    const { localidad } = req.query;
    try {
      if (localidad) {
        const zonasByName = await getZonasByName(localidad);
        if (!zonasByName.length) {
          throw Error(`${localidad} no se encontró.`);
        } else {
          return res.status(200).json(zonasByName);
        }
      } else {
        const allZonas = await getAllZonas();
        return res.status(200).json(allZonas);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getZonaByIdHandler = async ( req, res) => {
    const { id } = req.params;
    try {
        if ( id ) {
            const zonaId = await getZonaById( id );
            if ( !zonaId.length ) throw Error(`La zona ${id} no existe.`);
            else return res.status(200).json(zonaId);
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const putZonasHandler = async (req, res) => {
    const { id } = req.params;
    const editedData = req.body;
    try {
        const editZona = await putZonas(id, editedData);
        return res.status(200).json(editZona);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteZonaHandler = async (req , res) => {
    const { id } = req.params;
    try {
        if(!id){
            throw Error(`${id} no existe para borrar.`)
        }else{
            const deleteZona = await deleteZonas(id)
            res.status(200).json(deleteZona)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createZonaHandler,
    getZonasHandler,
    deleteZonaHandler,
    putZonasHandler,
    getZonaByIdHandler,
};