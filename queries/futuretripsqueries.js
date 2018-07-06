const database = require("../database-connection");

module.exports = {
  list() {
    return database("futuretrips").select();
  },
  read(id) {
    return database("futuretrips")
      .select()
      .where("id", id)
      .first();
  },
  create(futuretrips) {
    return database("futuretrips")
      .select()
      .insert(futuretrips)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, futuretrips) {
    return database("futuretrips")
      .update(futuretrips)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  }, 
  delete(id) {
    return database("futuretrips")
      .delete()
      .where("id", id);
  }
};
