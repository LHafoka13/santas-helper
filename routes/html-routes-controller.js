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
    res.render('index');
});

module.exports = router;