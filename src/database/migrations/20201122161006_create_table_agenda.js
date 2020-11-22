exports.up = function(knex) {
    return  knex.schema.createTable('agenda', function(table){
         table.string('id').primary();
         table.string('agenda_nome').notNullable();
     });
   };
   
   exports.down = function(knex) {
      return knex.schema.dropTable('agenda');
   };
   