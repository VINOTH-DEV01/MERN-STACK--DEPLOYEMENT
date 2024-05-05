const Mongoose = require("mongoose");

const EmployeeListSchema = Mongoose.Schema({
  _id: Mongoose.Types.ObjectId,
  name: { type:String, require : true},
  loc:  { type:String, require : true }  
});
module.exports = Mongoose.model('employees', EmployeeListSchema);     