const {createProductController, getProductsByName, getAllProducts, deleteProducts, getProductById, putProducts} = require ("../controllers/ProductController")

const createProductHandler = async (req , res) => {
    try {
        const { denomination,category, stock, price, image } = req.body
        const response = await createProductController( denomination, category, stock, price, image );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};

const getProductsHandler = async (req, res) => {
    const { denomination } = req.query;
    try {
      if (denomination) {
        const productsByName = await getProductsByName(denomination);
        if (!productsByName.length) {
          throw Error(`${denomination} no se encontró.`);
        } else {
          return res.status(200).json(productsByName);
        }
      } else {
        const allProducts = await getAllProducts();
        return res.status(200).json(allProducts);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getProductByIdHandler = async ( req, res) => {
    const { id } = req.params;
    try {
        if ( id ) {
            const productId = await getProductById( id );
            if ( !productId.length ) throw Error(`El producto ${id} no existe.`);
            else return res.status(200).json(productId);
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const putProductsHandler = async (req, res) => {
    const { id } = req.params;
    const editedData = req.body;
    try {
        const editProduct = await putProducts(id, editedData);
        return res.status(200).json(editProduct);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteProductHandler = async (req , res) => {
    const { id } = req.params;
    try {
        if(!id){
            throw Error(`${id} no existe para borrar.`)
        }else{
            const deleteProduct = await deleteProducts(id)
            res.status(200).json(deleteProduct)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createProductHandler,
    getProductsHandler,
    deleteProductHandler,
    putProductsHandler,
    getProductByIdHandler,
};
