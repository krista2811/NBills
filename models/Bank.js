var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bankSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('bank', bankSchema);