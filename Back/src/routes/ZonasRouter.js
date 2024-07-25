const { Router } = require("express");

const { createZonaHandler,
       getZonasHandler,
       deleteZonaHandler, 
       putZonasHandler, 
       getZonaByIdHandler} = require("../handlers/ZonaHandlers");

const zonaRouter = Router();

zonaRouter.route("/")
.post(createZonaHandler)
.get(getZonasHandler)

zonaRouter.route("/:id")
.get(getZonaByIdHandler)
.put(putZonasHandler)
.delete(deleteZonaHandler)

module.exports = zonaRouter;