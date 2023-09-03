const Book = require("../models/Book");
const Joi = require("joi");

const createBook = async (req, res) => {
    const isValid = Joi.object({
      title: Joi.string().required(),
      author: Joi.string().required(),
      price: Joi.number().required(),
      category: Joi.string().required()
    }).validate(req.body);
  
    if (isValid.error) {
      return res.status(400).send({
        status: 400,
        message: "Invalid Data Format",
        data: isValid.error,
      });
    }
  
    const bookObj = new Book({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      category: req.body.category
    });
  
    try {
      await bookObj.save();
  
      res.status(201).send({
        status: 201,
        message: "Book successfuly created!",
      });
    } catch (err) {
      res.status(400).send({
        status: 400,
        message: "Book creation failed!",
      });
    }
  };




  const getAllBooks = async (req, res) => {
    try {
      
      const AllBooks = await Book.find({})
  
      res.status(200).send({
        status: 200,
        message: "User blogs fetched successfully!",
        data: AllBooks,
      });
    } catch (err) {
      res.status(400).send({
        status: 400,
        message: "Failed to get the blogs!",
        data: err,
      });
    }
  };


  const deleteBook = async (req, res) => {
    const bookId = req.params.id;
    console.log(bookId);
    try {
      await Book.findByIdAndDelete({_id:bookId});
  
      res.status(200).send({
        status: 200,
        message: "Book has been successfully deleted!",
      });
    } catch (err) {
      res.status(400).send({
        stauts: 400,
        message: "Unable to delete the Book!",
      });
    }
  };





  module.exports = {createBook,getAllBooks, deleteBook }