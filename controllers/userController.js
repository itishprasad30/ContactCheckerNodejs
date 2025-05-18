// @desc Register the user
//@route POST /api/users/register
// @access public

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const resisterUser = asyncHandler(async (req, res) => {

      const { username, email, password } = req.body;

      if (!username || !email || !password) {
            res.status(400);
            throw new Error("All fields are mandatory");
      }
      const userAvailable = await User.findOne({ email });
      
      if (userAvailable) {
            res.status(400);
            throw new Error("User Already registered");
      }

      // hash password

      const hashPassword = await bcrypt.hash(password, 10);
      console.log(hashPassword);
      

      res.json({message:"Register the User"})
})

module.exports = {resisterUser}