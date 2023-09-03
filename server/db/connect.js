const mongoose = require("mongoose");
require("dotenv").config();

  const connectDB = ()=>{
    console.log("Mongodb connected");
    return mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  module.exports = connectDB;