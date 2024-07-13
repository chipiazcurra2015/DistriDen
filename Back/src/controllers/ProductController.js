const {Product} = require ("../db");
const { Op, where } = require('sequelize');

const createProductController = async ( denomination,category, stock, price, image )=>{
        await Product.create({
            denomination,category, stock, price, image
        });

      return await Product.findAll();
    };

const getProductsByName = async (denomination) => {

    const productsName = await Product.findAll({
        where:
        { denomination:
        {[Op.iLike]:
        `%${denomination}%`
    }}})

    return productsName;
};
    
const getAllProducts = async () => {
    const produc = await Product.findAll();
    return produc;
};

const getProductById = async (id) => {
    const productFilter = await Product.findAll({
      where: { id }
    });
  
    return productFilter;
  };

  const putProducts = async (id, editedData) => {
    try {
      const product = await Product.findByPk(id);
  
      if (!product) {
        throw new Error('El producto no se encontró.');
      }
  
      if (editedData && typeof editedData === 'object') {
        product.stock = parseInt(editedData.stock);
        product.price = parseFloat(editedData.price);
      }
  
      await product.save();
  
      return product;
    } catch (error) {
      throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
  };

const deleteProducts = async(id) => await Product.destroy({where: {id}});


module.exports = {
    createProductController,
    getAllProducts,
    getProductsByName,
    deleteProducts,
    putProducts,
    getProductById
};
