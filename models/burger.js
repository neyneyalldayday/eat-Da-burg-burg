
var orm = require("../config/orm.js");

var burg = {
    selectAll: function(burgLyf) {
        orm.selectAll("burgers", function(res) {
            burgLyf(res);
        })
    },
    insertOne: function(newBurg, burgLyf) {
        orm.insertOne(newBurg, function(res) {
            burgLyf(res);
        })
    },
    updateOne: function(burgId, burgLyf) {
        orm.updateOne(burgId, function(res) {
            burgLyf(res);
        })
    }
    
}

module.exports =  burg;