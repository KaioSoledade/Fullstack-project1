const express = require('express');
const PORT = 3333;

const app = express();

app.get('/', (request, response) => response.status(200).send("Olá, Mundo!"))


module.exports = app;