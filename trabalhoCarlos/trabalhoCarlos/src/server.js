const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const bootstrap = require('./config/bootstrap');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

bootstrap.startup();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
