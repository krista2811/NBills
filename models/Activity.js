var mongoose = require('mongoose');
var log = require ('./Log');
var logSchema = log.schema;

var Schema = mongoose.Schema;

var activitySchema = new Schema({
    id: mongoose.Schema.Types.ObjectId, // PK
    name: {type: String, required: true},
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}], // names of User, should check later
    logs: [logSchema]
});

module.exports = mongoose.model('activity', activitySchema);