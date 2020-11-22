const crypt = require('crypto');
const connection = require('../database/connections');

module.exports = {

    async index(request, response) {
        const agenda = await connection('agenda').select('*');
    
        return response.json(agenda);
    },

    async create(request, response){
        const {agenda_nome} = request.body;

        const id = crypt.randomBytes(4).toString('HEX');

        await connection('agenda').insert({
            id,
            agenda_nome
        });
        return response.json({ id });
    }
};