var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Object Schema
var ObjectSchema = new Schema({
  key: String,
  value: String,
  timestamp: Number
});

//return the model
module.exports = mongoose.model('Object', ObjectSchema);
