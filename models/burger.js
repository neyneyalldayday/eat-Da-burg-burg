
var orm = require("../config/orm.js");

var burg = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(newBurg, cb) {
        orm.insertOne(newBurg, function(res) {
            cb(res);
        })
    },
    updateOne: function(burgId, cb) {
        orm.updateOne(burgId, function(res) {
            cb(res);
        })
    }
    
}

module.exports =  burg;