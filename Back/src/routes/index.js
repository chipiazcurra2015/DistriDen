const { Router } = require("express");
const productsRouter = require("./productsRouter");
const userRouter = require("./userRouter");
const customerRouter = require("./customerRouter");
const zonaRouter = require("./ZonasRouter");

const mainRouter = Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/product", productsRouter);
mainRouter.use("/customer", customerRouter);
mainRouter.use("/zona", zonaRouter);

module.exports = mainRouter;
