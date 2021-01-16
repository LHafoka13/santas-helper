const express = require("express");

const router = express.Router();

const listMember = require("../models/list_members.js");

router.get("/", (req, res) => {
  console.log("got");
  // listMember.selectAll((data) => {
  // const hbsObject = {
  //     ListMember: data,
  // };

  // });
  // console.log(hbsObject);
  res.render("index");
});

router.get("/lists", (req, res) => {
  console.log("got");
  // listMember.selectAll((data) => {
  // const hbsObject = {
  //     ListMember: data,
  // };

  // });
  // console.log(hbsObject);
  res.render("lists");

  router.get('/search', (req, res) => {
    console.log('got');

    res.render("etsy");
  } )
});

module.exports = router;
