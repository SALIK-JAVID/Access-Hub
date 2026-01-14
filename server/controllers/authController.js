const User = require('../models/User')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')


// register User
// POST /api/auth/register
exports.registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // validate karai ga if the user has entered the required inputs.
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      //  Check existing user
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      //  Hash password
      const salt = await bcrypt.genSalt(10); //adding a random string to password before it is hashed.
      const hashedPassword = await bcrypt.hash(password, salt);
  
      //  Create user
      const user = await User.create({
        name,
        email,
        password: hashedPassword
      });
  
      res.status(201).json({
        message: "User registered successfully"
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//   handling the login.
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;  
    
        //  Validation is the user entered some inputs or not?
    
        if (!email || !password) {
          return res.status(400).json({ message: "All fields are required" });
        }
    
        //  Check user
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
    
        //  Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
        if(user.status === "bloacked"){
          return res.status(403).json({
            message:"Your Account has been blocked by the admin, Contact admin for further changes",
          });
        }
    
        //  Generate token
        const token = jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
    
        res.status(200).json({
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
    
};
