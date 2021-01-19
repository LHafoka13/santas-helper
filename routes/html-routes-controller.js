const express = require("express");

const router = express.Router();

const db = require("../models");
// const listMember = require("../models/list_members.js");

router.get("/", (req, res) => {
  console.log("got");

  res.render("index");
});

//LIST MEMBERS PAGE API ROUTES (to display names of list we've created and to create/delete existing lists)

//LIST MEMBERS PAGE API ROUTES (to display names of list we've created and to create/delete existing lists)

router.get("/lists", (req, res) => {
  console.log("got");
  //join to include all of EACH List Member's Items
  db.ListMember.findAll({
    //   include: [db.GiftItem],
  }).then((dbListMember) => {
    // res.json(dbListMember);

    const jsonObject = JSON.parse(JSON.stringify(dbListMember));

    const hbsObject = {
      listmembers: jsonObject,
    };
    console.log(jsonObject);
    res.render("lists", hbsObject);
  });
});


//POST request for adding a new List Member to list members <ul>
router.post("/lists", (req, res) => {
  console.log("adding");
  db.ListMember.create(req.body)
  .then((dbListMember) => {
      res.json(dbListMember);

      const jsonObject = JSON.parse(JSON.stringify(dbListMember))

      const hbsOjbect = {
        listmembers: jsonObject,
      };
      console.log(jsonObject);
      res.render("lists", hbsOjbect);
  })
})


//DELETE request to delete a list member from the Listmembers db

router.delete("/api/delete/:id", (req, res) => {
  console.log("deleting");
  db.ListMember.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbListMember) => {
    // res.json(dbListMember);

    const jsonObject = JSON.parse(JSON.stringify(dbListMember));

    const hbsObject = {
      listmembers: jsonObject,
    };
    console.log(jsonObject);
    res.render("lists", hbsObject);
  });
});


//GIFT ITEMS PAGE API ROUTES (to display the gift items we've created and to create/delete existing gift items)
router.get("/items", (req, res) => {
  console.log("gift items");

  //join to include all of EACH List Member's Items
  db.GiftItem.findAll({
    //   include: [db.GiftItem],
  }).then((dbGiftItem) => {
    // res.json(dbListMember);

    const jsonObject = JSON.parse(JSON.stringify(dbGiftItem));

    const hbsObject = {
      giftitems: jsonObject,
    };
    console.log(jsonObject);
    res.render("items", hbsObject);
  });

});

//   router.get("/api/items", (req, res) => {
//     const query = {};
//     if (req.query.listmember_id) {
//       query.ListMemberId = req.query.listmember_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.ListMember
//     db.Post.findAll({
//       where: query,
//       include: [db.ListMember],
//     }).then((dbGiftItem) => {
//       const jsonObject = JSON.parse(JSON.stringify(dbGiftItem));

//       const hbsObject = {
//         giftitems: jsonObject,
//       };
//       console.log(jsonObject);
//       res.render("items", hbsObject);
//     });
//   });

//   // Get route for retrieving a single gift item
//   router.get("/api/items/:id", (req, res) => {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.ListMember
//     db.GiftItem.findOne({
//       where: {
//         id: req.params.id,
//       },
//       include: [db.ListMember],
//     }).then((dbGiftItem) => {
//       // res.json(dbListMember);

//       const jsonObject = JSON.parse(JSON.stringify(dbGiftItem));

//       const hbsObject = {
//         giftitems: jsonObject,
//       };
//       console.log(jsonObject);
//       res.render("items", hbsObject);
//     });
//   });

// POST route for saving a new gift item to the gift_items db
// router.post("/api/items", (req, res) => {
//   db.GiftItem.create(req.body).then((dbGiftItem) => {
//     // res.json(dbListMember);

//     const jsonObject = JSON.parse(JSON.stringify(dbGiftItem));

//     const hbsObject = {
//       giftitems: jsonObject,
//     };
//     console.log(jsonObject);
//     res.render("items", hbsObject);
//   });
// });

//   // DELETE route for deleting gift items
//   router.delete("/api/items/:id", (req, res) => {
//     db.GiftItem.destroy({
//       where: {
//         id: req.params.id,
//       },
//     }).then((dbGiftItem) => {
//       // res.json(dbListMember);

//       const jsonObject = JSON.parse(JSON.stringify(dbGiftItem));

//       const hbsObject = {
//         giftitems: jsonObject,
//       };
//       console.log(jsonObject);
//       res.render("items", hbsObject);
//     });
//   });

//   // PUT route for updating gift items
//   router.put("/api/items", (req, res) => {
//     db.GiftItem.update(req.body, {
//       where: {
//         id: req.body.id,
//       },
//     }).then((dbGiftItem) => res.json(dbGiftItem));
//   });

//   res.render("items");
// });


//   res.render("items");
// };

router.get("/search", (req, res) => {
  console.log("got");

  res.render("etsy");
});

module.exports = router;
