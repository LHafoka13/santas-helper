// Dependencies

// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  app.get("/api/items", (req, res) => {
    const query = {};
    if (req.query.listmember_id) {
      query.ListMemberId = req.query.listmember_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.ListMember
    db.Post.findAll({
      where: query,
      include: [db.ListMember],
    }).then((dbGiftItem) => res.json(dbGiftItem));
  });

  // Get route for retrieving a single gift item
  app.get("/api/items/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.ListMember
    db.GiftItem.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.ListMember],
    }).then((dbGiftItem) => res.json(dbGiftItem));
  });

  // POST route for saving a new gift item to the gift_items db
  app.post("/api/items", (req, res) => {
    db.GiftItem.create(req.body).then((dbGiftItem) => res.json(dbGiftItem));
  });

  // DELETE route for deleting gift items
  app.delete("/api/items/:id", (req, res) => {
    db.GiftItem.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbGiftItem) => res.json(dbGiftItem));
  });

  // PUT route for updating gift items
  app.put("/api/items", (req, res) => {
    db.GiftItem.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbGiftItem) => res.json(dbGiftItem));
  });
};
