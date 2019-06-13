var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    aid: Number,
    uid: Number, // FK from user
    real_name: String,
    bid: Number, // FK from bank
    account: String
});

module.exports = mongoose.model('account', accountSchema);