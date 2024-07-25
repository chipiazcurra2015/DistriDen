const { createCustomerController, getCustomersByName, getAllCustomers, deleteCustomers, getCustomerById, putCustomers} = require ("../controllers/CustomerController")

const createCustomerHandler = async (req , res) => {
    try {
        const { name, address, image } = req.body
        const response = await createCustomerController( name, address, image );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};

const getCustomersHandler = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const customersByName = await getCustomersByName(name);
        if (!customersByName.length) {
          throw Error(`${name} no se encontró.`);
        } else {
          return res.status(200).json(customersByName);
        }
      } else {
        const allCustomers = await getAllCustomers();
        return res.status(200).json(allCustomers);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getCustomerByIdHandler = async ( req, res) => {
    const { id } = req.params;
    try {
        if ( id ) {
            const customerId = await getCustomerById( id );
            if ( !customerId.length ) throw Error(`El cliente ${id} no existe.`);
            else return res.status(200).json(customerId);
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const putCustomersHandler = async (req, res) => {
    const { id } = req.params;
    const editedData = req.body;
    try {
        const editCustomer = await putCustomers(id, editedData);
        return res.status(200).json(editCustomer);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteCustomerHandler = async (req , res) => {
    const { id } = req.params;
    try {
        if(!id){
            throw Error(`${id} no existe para borrar.`)
        }else{
            const deleteCustomer = await deleteCustomers(id)
            res.status(200).json(deleteCustomer)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createCustomerHandler,
    getCustomersHandler,
    deleteCustomerHandler,
    putCustomersHandler,
    getCustomerByIdHandler,
};
