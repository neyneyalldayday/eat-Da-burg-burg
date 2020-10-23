
var orm = require("../config/orm.js");

var burg = {
    selectAll: function(calb) {
        orm.selectAll("burgers", function(res) {
            calb(res);
        })
    },
    insertOne: function(newBurg, calb) {
        orm.insertOne(newBurg, function(res) {
            calb(res);
        })
    },
    updateOne: function(burgId, calb) {
        orm.updateOne(burgId, function(res) {
            calb(res);
        })
    }
    
}

module.exports =  burg;