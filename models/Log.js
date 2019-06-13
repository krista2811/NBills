var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
    nid: Number, // FK from activity
    uid: Number, // FK from user
    money: Number, // positive
    time: Date // timestamp
});

module.exports = mongoose.model('log', logSchema);