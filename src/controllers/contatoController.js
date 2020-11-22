const connection = require('../database/connections');

module.exports = {
    async index(request, response){

        const contato = await connection('contato')
        .join('agenda', 'agenda.id', '=', 'contato.agenda_id')
        .select(['contato.*', 'agenda.agenda_nome']);

        return response.json(contato);
    },

    async create(request, response){
        const {nome, telefone, email} = request.body;
        const agenda_id = request.headers.authorization;

        const [id] = await connection('contato').insert({
            nome, 
            telefone, 
            email, 
            agenda_id,
        });

        return response.json({ id })
    },

    async delete(request, response){
        const { id } = request.params;
        const agenda_id = request.headers.authorization;

        const contato = await connection('contato').where('id', id).select('agenda_id').first();
        if(contato.agenda_id != agenda_id){
            return response.status(401).json({error: 'Operação não permitida!'});
        }

        await connection('contato').where('id', id).delete();

        return response.status(204).send();
    },

    async update(request, response, next){
        try{
            const {nome, telefone, email} = request.body;
            const { id } = request.params;
            const contatoID = await connection('contato').select('*').where({id: id});

            if(contatoID != ""){
                await connection('contato')
                .update({ nome, telefone, email})
                .where({ id: id })

                return response.json({ "Status": "Alterado com Sucesso!" });
            }
        
            return response.status(400).json({ "Status": "ID de Contato não encontrado!" });
        }catch(error){
            next(error)
        }
    },

    async getOne(request, response){
        const { id } = request.params;

        const contato = await connection('contato')
        .join('agenda', 'agenda.id', '=', 'contato.agenda_id')
        .select([
            'contato.*', 
            'agenda.agenda_nome']).where('contato.id', id);

        return response.json(contato);
    },
}