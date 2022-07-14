const express = require('express');
const router = require('./routes/router');
const { errorHanddler } = require('./middlewares');

// ...

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHanddler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
