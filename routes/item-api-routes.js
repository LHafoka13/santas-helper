const db = require("../models");


  //GIFT ITEMS API CALL DO NOT TOUCH THESE
  module.exports = (app) => {
  app.get("/api/items", (req, res) => {

    const query = {};

    if (req.query.id) {
      query.ListMemberId = req.query.id;
    }
    
    db.GiftItem.findAll({
      // where: query,
      include: [db.ListMember],
    }).then((dbGiftItem) => 
    console.log(dbGiftItem));
  });


  // api call to post (create) one record in the gift_items db
  app.post("/api/items", (req, res) => {
    db.GiftItem.create(req.body).then((dbGiftItem) => res.json(dbGiftItem));
  });

  // app.put

  // api call to delete (delete) one record in the gift_items db
  // app.delete("/api/items/:id", (req, res) => {
  //   db.GiftItem.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   }).then((dbGiftItem) => res.json(dbGiftItem));

  // });
};
