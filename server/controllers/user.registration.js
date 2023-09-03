const Registration = require("../models/Registration")
const bcrypt = require("bcrypt");
const { verifyUsernameAndEmailExists } = require("../utils/verifyEmailandUsername");
const SALT_ROUNDS = 10;

const registerUser = async(req,res)=>{
    const userBody = req.body;
    const userExists = await verifyUsernameAndEmailExists(userBody.email,userBody.username);

  if (userExists ==="E") {
    res.send({ status: 400, message: "Email already exists" });
    return;
  }
  if (userExists ==="U") {
    res.send({ status: 400, message: "Username already exists" });
    return;
  }


  const hashedPassword = await bcrypt.hash(userBody.password, SALT_ROUNDS);
  const userObj = new Registration({
    name: userBody.name,
    username: userBody.username,
    phonenumber: userBody.phonenumber,
    password: hashedPassword,
    email: userBody.email,
  });

  await userObj.save();

  res.status(201).json({
    status:201,
    message:"User has been created!"
});
}
module.exports = { registerUser };