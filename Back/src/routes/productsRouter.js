const { Router } = require("express");

const { createProductHandler,
       getProductsHandler,
       deleteProductHandler, 
       putProductsHandler, 
       getProductByIdHandler} = require("../handlers/productsHandlers");

const productsRouter = Router();

productsRouter.route("/")
.post(createProductHandler)
.get(getProductsHandler)

productsRouter.route("/:id")
.get(getProductByIdHandler)
.put(putProductsHandler)
.delete(deleteProductHandler)

module.exports = productsRouter;
