const database = require("./database-connection");

module.exports = {
  list() {
    return database("tripBudget").select();
  },
  read(id) {
    return database("tripBudget")
      .select()
      .where("id", id)
      .first();
  },
  create(tripBudget) {
    return database("tripBudget")
      .select()
      .insert(tripBudget)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, tripBudget) {
    return database("tripBudget")
      .update(tripBudget)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("tripBudget")
      .delete()
      .where("id", id);
  }
};
