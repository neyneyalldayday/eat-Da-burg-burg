var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, calb) {
        let queryStr = "SELECT * FROM " + tableInput + ";";
        connection.query(queryStr, function (err, res) {
            if (err) throw err;
            calb(res);
        })
        
    },
    insertOne: function(newBurg, calb) {
        let queryStr = "INSERT INTO burgers (burger_name) VALUES ('" + newBurg + "');";
        connection.query(queryStr,function(err, res) {
            if(err) throw err;
            calb(res);
        })
    },
    updateOne: function(burgId, calb) {
        let queryStr = "UPDATE burgers SET devoured = true WHERE ID = " + burgId + ";";
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            calb(res);
        })
    }
}

module.exports = orm;