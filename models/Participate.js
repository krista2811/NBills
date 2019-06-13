var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var participateSchema = new Schema({
    uid: Number, // FK from user
    nid: Number // FK from activity
});

module.exports = mongoose.model('participate', participateSchema);