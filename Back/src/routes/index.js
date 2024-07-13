const { Router } = require("express");
const productsRouter = require("./productsRouter");
//const loginRouter = require("./loginRouter");
const userRouter = require("./userRouter");

const mainRouter = Router();

//mainRouter.use("/login", loginRouter);
mainRouter.use("/product", productsRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
