var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currentSchema = new Schema({
    nid: Number // FK from activity, NOT NULL
});

module.exports = mongoose.model('current', currentSchema);