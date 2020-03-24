const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express. Router();

/*
* TIPOS DE PARÂMETROS
*   Query params: nomeados, enviados na rota depois de "?"
*   Route params: utilizados para identificas recursos
*   Request Body: corpo da requisição
*/

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/incidents/:ong_id', IncidentController.listById);

routes.get('/profile', ProfileController.index);
module.exports = routes;