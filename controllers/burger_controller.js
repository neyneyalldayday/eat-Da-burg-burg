var express = require("express");
var router = express.Router();

var burg = require("../models/burger.js");

router.get("/", function(req, res) {
    console.log(req)
    burg.selectAll(function(data) {
        res.render("index", { burgers: data });
    })
})
router.post("/api/burgers", function(req, res) {
    burg.insertOne([req.body.name], function(result) {
        res.json({ id: result.insertId });
    })
})
router.put("/api/burgers/:id", function(req, res) {
    let burgId = req.params.id;
    burg.updateOne(burgId, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end()
    })
})




module.exports = router;