const {Customer} = require ("../db");
const { Op, where } = require('sequelize');

const createCustomerController = async ( name, address, image )=>{
        await Customer.create({
            name, address, image
        });

      return await Customer.findAll();
    };

const getCustomersByName = async (name) => {

    const customersName = await Customer.findAll({
        where:
        { name:
        {[Op.iLike]:
        `%${name}%`
    }}})

    return customersName;
};
    
const getAllCustomers = async () => {
    const customer = await Customer.findAll();
    return customer;
};

const getCustomerById = async (id) => {
    const customerFilter = await Customer.findAll({
      where: { id }
    });
  
    return customerFilter;
  };

  const putCustomers = async (id, editedData) => {
    try {
      const customer = await Customer.findByPk(id);
  
      if (!customer) {
        throw new Error('El cliente no se encontró.');
      }
  
      if (editedData && typeof editedData === 'object') {
        customer.address = editedData.address;
        customer.name = editedData.name;
        customer.image = editedData.image;
      }
  
      await customer.save();
  
      return customer;
    } catch (error) {
      throw new Error(`Error al actualizar el cliente: ${error.message}`);
    }
  };

const deleteCustomers = async(id) => await Customer.destroy({where: {id}});


module.exports = {
    createCustomerController,
    getAllCustomers,
    getCustomerById,
    deleteCustomers,
    putCustomers,
    getCustomersByName
};