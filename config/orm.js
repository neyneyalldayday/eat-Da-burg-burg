var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, consb) {
        let querryStr = "SELECT * FROM" + tableInput + ";";
        connection.query(queryStr, function (err, res) {
            if (err) throw err;
            consb(res)
        })
    },
    insertOne: function(newBurg, consb) {
        let querryStr = "INSERT INTO burgers (burger_name) VALUES ('" + newBurg + "');";
        connection.query(queryStr,function(err, res) {
            if(err) throw err;
            consb(res);
        })
    },
    updateOne: function(burgId, consb) {
        let queryStr = "UPDATE burgers SET devoured = true WHERE ID = " + burgId + ";";
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
        })
    }
}

module.exports = orm;