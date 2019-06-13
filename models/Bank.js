var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bankSchema = new Schema({
    bid: Number,
    name: String
});

module.exports = mongoose.model('bank', bankSchema);