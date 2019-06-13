var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
    nid: Number, // PK
    name: String
});

module.exports = mongoose.model('activity', activitySchema);