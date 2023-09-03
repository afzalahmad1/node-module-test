const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Registration = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required:true,
      unique:true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true
    }
  },
  {
    strict: false,
  }
);

module.exports = Mongoose.model("registration", Registration);