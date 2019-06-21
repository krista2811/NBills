var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var debtSchema = new Schema({
    nid: {type: Schema.Types.ObjectId, ref: 'Activity', required: true}, // FK from activity
    giver_id: {type: Schema.Types.ObjectId, ref: 'User', required: true}, // FK from user
    receiver_id: {type: Schema.Types.ObjectId, ref: 'User', required: true}, // FK from user
    money: {type: Number, required: true} // always POSITIVE
});

module.exports = mongoose.model('debt', debtSchema);