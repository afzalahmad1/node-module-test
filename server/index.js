const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const connectDB = require("./db/connect")
const cors = require("cors");
const bodyParser = require("body-parser");
const RegistrationRoutes = require("./routes/registration");
const LoginRoutes = require("./routes/login");
const bookRoutes = require("./routes/book");

const { verifyUsernameAndEmailExists } = require("./utils/verifyEmailandUsername");



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use("/user", RegistrationRoutes);
app.use("/user", LoginRoutes);
app.use("/user", bookRoutes);






const start = async ()=>{
    try {
        await connectDB();
        app.listen(process.env.SERVER_PORT,()=>{
        console.log("Server is running at port", process.env.SERVER_PORT);
        })
    } catch (err) {
        console.log(err);
    }
}
start();