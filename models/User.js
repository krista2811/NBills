var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    uid: Number,
    uname: String
});

module.exports = mongoose.model('user', userSchema);