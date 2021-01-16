const db = require("../models");

module.exports = (app) => {
  app.get("/api/lists", (req, res) => {
    //join to include all of EACH List Member's Items
    db.ListMember.findAll({
      //   include: [db.GiftItem],
    }).then((dbListMember) => {
      res.json(dbListMember);
    });
  });

  app.get("/api/lists/:id", (req, res) => {
    //join to include all of ONE of the List Member's Items 
    db.ListMember.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbAuthor) => res.json(dbAuthor));
  });

  app.post("/api/authors", (req, res) => {
    db.Author.create(req.body).then((dbAuthor) => res.json(dbAuthor));
  });

  app.delete("/api/authors/:id", (req, res) => {
    db.Author.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbAuthor) => res.json(dbAuthor));
  });
};
