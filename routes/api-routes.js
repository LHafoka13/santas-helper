// Requiring our models
// const db = require("../models");

const db = require("../models");

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  console.log("display this shit");
  app.get('/api/lists', (req, res) => {
    db.ListMember.findAll({}).then((dbListMember) => res.json(dbListMember));
  })
};
