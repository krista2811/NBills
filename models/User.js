var mongoose = require('mongoose');
var account = require ('./Account');
var accountSchema = account.schema;
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    uname: {type: String, required: true, unique: true},
    accounts: [accountSchema]
});

module.exports = mongoose.model('user', userSchema);