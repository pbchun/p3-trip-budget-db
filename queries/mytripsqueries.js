const database = require("./database-connection");

module.exports = {
  list() {
    return database("mytrips").select();
  },
  read(id) {
    return database("mytrips")
      .select()
      .where("id", id)
      .first();
  },
  create(mytrips) {
    return database("mytrips")
      .select()
      .insert(mytrips)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, mytrips) {
    return database("mytrips")
      .update(mytrips)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("mytrips")
      .delete()
      .where("id", id);
  }
};
