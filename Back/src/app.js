const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index.js");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));

app.use(express.json());
// Middleware cors, permite que el cliente se conecte
app.use(cors({ origin: `${process.env.URL_FRONT}`}));

app.use(mainRouter);

module.exports = app;
