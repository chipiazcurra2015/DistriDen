const { Router } = require("express");

const { createProductHandler, getProductsHandler, deleteProductHandler, putProductsHandler, getProductByIdHandler} = require("../handlers/productsHandlers");

const productsRouter = Router();

productsRouter.get("/", getProductsHandler);

productsRouter.get("/:id", getProductByIdHandler);

productsRouter.delete("/:id", deleteProductHandler);

productsRouter.put("/:id", putProductsHandler);

productsRouter.post("/", createProductHandler);

module.exports = productsRouter;
