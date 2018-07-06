exports.seed = function(knex, Promise) {
  return knex('futuretrips').del()
    .then(function () {
      return knex('futuretrips').insert([
        {
          id: 1, 
          destination: 'Seoul, South Korea',
        }, {
          id: 2, 
          destination: 'Tokyo, Japan',
        }, {
          id: 3, 
          destination: 'Athens, Greece',
        }
      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE futuretrips_id_seq RESTART WITH 4;')
      });
    });
};