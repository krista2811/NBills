var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var debtSchema = new Schema({
    nid: Number, // FK from activity
    src_nid: Number, // FK from user
    des_nid: Number, // FK from user
    money: Number // always POSITIVE
});

module.exports = mongoose.model('debt', debtSchema);