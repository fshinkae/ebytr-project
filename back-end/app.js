const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const { routerTask } = require('./src/routes/routesTasks');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${process.env.PORT} </h1>`));

// Função para testes
// app.get('/', (_request, response) => {
//   response.send();
// });

app.use('/tasks', routerTask);

module.exports = app;
