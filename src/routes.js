const express = require('express');

const ContatoController = require('./controllers/contatoController')
const agendaController = require('./controllers/agendaController')
const contatoController = require('./controllers/contatoController');


const routes = express.Router();

routes.get('/agenda', agendaController.index);
routes.post('/agenda', agendaController.create);

routes.get('/contato/:id', contatoController.getOne)
routes.get('/contato', ContatoController.index);

routes.put('/contato', ContatoController.create);

routes.post('/contato/:id', contatoController.update)

routes.delete('/contato/:id', ContatoController.delete)


module.exports = routes;
