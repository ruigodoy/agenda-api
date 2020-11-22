exports.up = function(knex) {
    return  knex.schema.createTable('contato', function(table){
        table.increments();

        table.string('nome').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();

        table.string('agenda_id').notNullable();
        
        table.foreign('agenda_id').references('id').inTable('agenda');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('contato');
};
