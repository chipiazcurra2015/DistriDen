const {Customer, Zona} = require ("../db");
const { Op, where } = require('sequelize');

const createCustomerController = async ( name, address, image, zona )=>{

       const customerAct = await Customer.findAll({where: {name}});
       if (customerAct.length === 0) {
        const newCustomer = await Customer.create({
          name, address, image
        });

        const findZona = await Zona.findAll({where: {id: zona}});

        await newCustomer.addZonas(findZona);
       } else{
        const findZona = await Zona.findAll({where: {id: zona}});

        await customerAct.addZonas(findZona);
       }

      const zonaAct = await Customer.findAll({include: {
        model: Zona,
        attributes: ["localidad", "provincia"],
        through: {
          attributes: []
        }
      }})

      return zonaAct;
    };

const getCustomersByName = async (name) => {

    const customersName = await Customer.findAll({
        where:
        { name:
        {[Op.iLike]:
        `%${name}%`
        }},
        include: {
          model: Zona,
          attributes: ["localidad", "provincia"],
          through: {
            attributes: []
          }
        }
    })

    return customersName;
};
    
const getAllCustomers = async () => {
   
    const zonaAct = await Customer.findAll({include: {
      model: Zona,
      attributes: ["localidad", "provincia"],
      through: {
        attributes: []
      }
    }})
    return zonaAct;
};

const getCustomerById = async (id) => {
    const customerFilter = await Customer.findAll({
      where: { id },
      include: {
        model: Zona,
        attributes: ["localidad", "provincia"],
        through: {
          attributes: []
        }
      }
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