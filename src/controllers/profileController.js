const connection = require('../database/connections');

module.exports = {
    async index(request, response){
        const contato_id = request.headers.authorization;

        const agenda = await connection('agenda')
        .where('contato_id', contato_id)
        .select('*')

        return response.json(agenda);
    }
}