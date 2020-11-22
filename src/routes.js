const express = require('express');

const ContatoController = require('./controllers/contatoController')
const agendaController = require('./controllers/agendaController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController');
const contatoController = require('./controllers/contatoController');


const routes = express.Router();

routes.post('/sessions', sessionController.create)

routes.get('/agenda', agendaController.index);
routes.post('/agenda', agendaController.create);

routes.get('/profile', profileController.index)

routes.get('/contato/:id', contatoController.getOne)
routes.get('/contato', ContatoController.index);

routes.put('/contato', ContatoController.create);

routes.post('/contato/:id', contatoController.update)

routes.delete('/contato/:id', ContatoController.delete)


module.exports = routes;
