const connection = require('../database/connections');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('contato')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return response.status(400).json({ error: 'nenhuma ong encontrada com esse ID'});
        }

        return response.json(ong);
    }
}