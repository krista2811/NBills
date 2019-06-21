var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    real_name: String,
    bank: {type: Schema.Types.ObjectId, ref: 'Bank'}, // FK from bank
    account: {type: String, required: true}
});

module.exports = {
	model: mongoose.model('account', accountSchema),
	schema: accountSchema
};