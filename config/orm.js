var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableIn, cb) {
        let queryStr = "SELECT * FROM " + tableIn + ";";
        connection.query(queryStr, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    insertOne: function(newBurg, cb) {
        let queryStr = "INSERT INTO burgers (burger_name) VALUES ('" + newBurg + "');";
        connection.query(queryStr,function(err, res) {
            if(err) throw err;
            cb(res);
        })
    },
    updateOne: function(burgId, burgLyf) {
        let queryStr = "UPDATE burgers SET devoured = true WHERE ID = " + burgId + ";";
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;