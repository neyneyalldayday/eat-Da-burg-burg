var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, burgLyf) {
        let queryStr = "SELECT * FROM " + tableInput + ";";
        connection.query(queryStr, function (err, res) {
            if (err) throw err;
            burgLyf(res);
        })
    },
    insertOne: function(newBurg, burgLyf) {
        let queryStr = "INSERT INTO burgers (burger_name) VALUES ('" + newBurg + "');";
        connection.query(queryStr,function(err, res) {
            if(err) throw err;
            burgLyf(res);
        })
    },
    updateOne: function(burgId, burgLyf) {
        let queryStr = "UPDATE burgers SET devoured = true WHERE ID = " + burgId + ";";
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            burgLyf(res);
        })
    }
}

module.exports = orm;