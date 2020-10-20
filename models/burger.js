var orm = require("./config/orm");

var burg = {
    selectAll: function(consb) {
        orm.selectAll("burgers", function(res) {
            consb(res);
        })
    },
    insertOne: function(newBurg, consb) {
        orm.insertOne(newBurg, function(res) {
            consb(res);
        })
    }
}

module.exports =  burger;