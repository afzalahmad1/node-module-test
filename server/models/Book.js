const Mongoose = require("mongoose");

const Book = new Mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      requird: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    strict: false,
  }
);

module.exports = Mongoose.model("book", Book);
