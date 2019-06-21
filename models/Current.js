var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currentSchema = new Schema({
    nid: {type: Schema.Types.ObjectId, ref: 'Activity'} // FK from activity, NOT NULL
});

module.exports = mongoose.model('current', currentSchema);