const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const routes = require("./routes");

app.use(cors()); // esta librería es para poder trabajar front con back en localhost
app.use(morgan("dev"));

app.use("/api", routes); //todas las rutas empiezan con api
app.use("/", (req, res, next) => res.redirect("/api")); // me aseguro que si o si vaya para /api si entraste en otra ruta

app.listen(1337, (req, res, next) => {
  console.log("API on port 1337");
});
