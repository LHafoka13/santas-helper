const express = require("express");

const router = express.Router();

const db = require("../models");
// const listMember = require("../models/list_members.js");

router.get("/", (req, res) => {
  console.log("got");
  
  res.render("index");
});


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
    }
     console.log(jsonObject);
    res.render("lists", hbsObject);
  });
});

router.get('/search', (req, res) => {
  console.log('got');

  res.render("etsy");
});

module.exports = router;
