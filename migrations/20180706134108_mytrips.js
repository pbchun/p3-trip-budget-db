exports.up = function(knex, Promise) {
  return knex.schema.createTable('mytrips', mytrips => {
    mytrips.increments()
    mytrips.text('destination')
    mytrips.date('startTravelDate')
    mytrips.date('endTravelDate')
    mytrips.integer('totalExpectedBudget')
    mytrips.integer('amountSaved')
    mytrips.integer('amountToSave')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('mytrips')
};
