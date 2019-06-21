var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
    giver: {type: String, required: true}, // name from user
    receiver: String, // name from user, can be null
    money: {type: Number, required: true}, // positive,
    time: {type: Date, default: Date.now}, // timestamp
    info: String
});

module.exports = {
	schema: logSchema,
	model: mongoose.model('log', logSchema)
}