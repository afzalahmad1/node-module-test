const Login = require("../models/Login");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const Registration = require("../models/Registration");


const loginUser = async (req, res) => {
    // console.log(req.body);
    const { loginId, password } = req.body;
    let userData;
  
    const isValid = Joi.object({
      loginId: Joi.string().email().required(),
    }).validate({loginId});
    
    try {
        // console.log(isValid.error.message);
      // Checking if the loginId is sent as Email or username based on that db call is made
      if (isValid.error) {
          userData = await Registration.findOne({ username: loginId });
      } else {
          userData = await Registration.findOne({ email: loginId });
      }
    //   console.log(userData);
  
      // If user is not found we send an error
      if (!userData) {
        return res.status(400).send({
          status: 400,
          message: "No user found! Please register or check your credentials",
        });
      }
  
      // Updating the express session
    //   req.session.isAuth = true;
    //   req.session.user = {
    //     username: userData.username,
    //     email: userData.email,
    //     userId: userData._id,
    //   };
  
    //   console.log(req.session._id);
  
      // Password is matched with the encrypted db password
      const isPasswordMatched = await bcrypt.compare(password, userData.password);
  
      if (isPasswordMatched) {
        return res.status(200).send({
          status: 200,
          message: "Successfully logged in!",
        //   data: req.session.user,
        });
      } else {
        // console.log("incorrect");
        return res.status(400).json({
          status: 400,
          message: "Incorrect Password!",
        });
      }
    } catch (err) {
      res.status(400).send({
        status: 400,
        message: "DB Error: Login failed",
        data: err,
      });
    }
  };

  module.exports = {loginUser}