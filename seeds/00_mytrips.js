exports.seed = function(knex, Promise) {
  return knex('mytrips').del()
    .then(function () {
      return knex('mytrips').insert([
        {
          id: 1, 
          destination: 'Portland, OR',
          startTravelDate: '2018-08-14',
          endTravelDate: '2018-08-16',
          totalExpectedBudget: 600.00,
          amountSaved: 500.00,
          amountToSave: 100.00
        }, {
          id: 2, 
          destination: 'Las Vegas, NV',
          startTravelDate: '2018-10-12',
          endTravelDate: '2018-10-14',
          totalExpectedBudget: 700.00,
          amountSaved: 300.00,
          amountToSave: 400.00
        }, {
          id: 3, 
          destination: 'Los Angeles, CA',
          startTravelDate: '2019-01-07',
          endTravelDate: '2019-01-10',
          totalExpectedBudget: 800.00,
          amountSaved: 0.00,
          amountToSave: 800.00
        }
      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE mytrips_id_seq RESTART WITH 4;')
      });
    });
};
