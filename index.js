const express = require("express");
const app = express();
const path = require("path");
const routes = require("./src/routes");

app.use(express.static(path.resolve(__dirname, "./src/public")));

app.use("/", routes);

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

// Inicia o servidor na porta 5000
app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
