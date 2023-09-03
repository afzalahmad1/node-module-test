const express = require("express");
const router = express();

const {
    createBook,
    getAllBooks,
    deleteBook
} = require("../controllers/user.books");
const { isAuth } = require("../middlewares/AuthMiddleware");

 router.post("/dashboard", createBook);
 router.get("/getAllBooks", getAllBooks);
 router.delete("/deleteBook/:id", deleteBook);


module.exports = router;