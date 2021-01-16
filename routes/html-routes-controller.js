const express = require("express");

const router = express.Router();

const db = require("../models");
// const listMember = require("../models/list_members.js");

router.get("/", (req, res) => {
  console.log("got");

  res.render("index");
});

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

  res.render("items");
});

router.get("/search", (req, res) => {
  console.log("got");

  res.render("etsy");
});

module.exports = router;
