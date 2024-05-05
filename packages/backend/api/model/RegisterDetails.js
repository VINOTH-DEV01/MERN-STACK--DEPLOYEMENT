const Mongoose = require("mongoose");

const registerSchema = Mongoose.Schema({
  _id: Mongoose.Types.ObjectId,
  fname: { type: String, require: true },
  lname: { type: String, require: true },
  // email: { type: String, require: true },
  // mobilenumber: { type: Number, require: true },
  // location: { type: String, require: true },
  // typeofaccount: { type: String, require: true },
  // technologies: { type: String, require: true },
  // descr: { type: String, require: true },
  // password: { type: String, require: true },
  // cpassword: { type: String, require: true },
});
module.exports = Mongoose.model('register', registerSchema)