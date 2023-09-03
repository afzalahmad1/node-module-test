const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Login = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique:true,
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

module.exports = Mongoose.model("login", Login);