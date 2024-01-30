const express = require('express');
const router = express.Router();

const tasksController = require('./controllers/tasksController')




router.get('/tasks',  tasksController.getAll);

// (request, response)
// (res   , res     )
// temos uma rota(Router) do tipo GET no ednpoint "/tasks", e ela vai executar uma Controller.getAll . Então retornara todas sua tasks para a gente

module.exports = router;