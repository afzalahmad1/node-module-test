const express = require("express");
const router = express();

const {
  registerUser,
} = require("../controllers/user.registration");
const { isAuth } = require("../middlewares/AuthMiddleware");

router.post("/register", registerUser);
// router.post("/login", loginUser);

module.exports = router;