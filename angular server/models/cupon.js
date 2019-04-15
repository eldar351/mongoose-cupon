var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema- the structure of the db
var CuoponSchema = new Schema({
  Clientid:  String,
  Cupontext: String,
  EndDate: Date,
  isUsed:Boolean

});

//we work with the model to save as collection
var cupon = mongoose.model('Cupon', CuoponSchema);

module.exports= cupon;

