const { Router } = require("express");

const { createCustomerHandler,
       getCustomersHandler,
       deleteCustomerHandler, 
       putCustomersHandler, 
       getCustomerByIdHandler} = require("../handlers/CustomerHandlers");

const customerRouter = Router();

customerRouter.route("/")
.post(createCustomerHandler)
.get(getCustomersHandler)

customerRouter.route("/:id")
.get(getCustomerByIdHandler)
.put(putCustomersHandler)
.delete(deleteCustomerHandler)

module.exports = customerRouter;