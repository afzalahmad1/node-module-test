const express = require("express");
const router = express();

const {
  loginUser,
} = require("../controllers/user.login");
const { isAuth } = require("../middlewares/AuthMiddleware");

 router.post("/login", loginUser);

module.exports = router;