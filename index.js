const express = require('express');
const app = express();
const routes = require('./src/routes');

app.use('/', routes);

// Inicia o servidor na porta 5000
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
