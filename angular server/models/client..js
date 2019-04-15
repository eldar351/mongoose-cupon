var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema- the structure of the db
var clientSchema = new Schema({
  name:  String,
  phone: Number,
  cupon: Number

});

//we work with the model to save as collection
var Client = mongoose.model('Client', clientSchema);

module.exports= Client;

