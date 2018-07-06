exports.up = function(knex, Promise) {
  return knex.schema.createTable('futuretrips', futuretrips => {
    futuretrips.increments()
    futuretrips.text('destination')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('futuretrips')
};
