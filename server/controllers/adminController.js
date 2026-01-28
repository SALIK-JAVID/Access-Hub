const User = require("../models/User");
const bcrypt = require("bcryptjs");
// admin can create user :
exports.createUser = async (req, res) => {
  try {
   
    const { name, email, password, status } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists with this email",
      });
    }

    // Hash password (same as authController)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      status: status || "active",
    });

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
      message: "User created successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Admin create user error:", error);
    res.status(500).json({
      message: "Failed to create user",
    });
  }
};


// Get all users
exports.getAllUsers = async (req, res) => {
    try {
      const { search } = req.query;
  
      let query = {};
  
      if (search) {
        query = {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
          ],
        };
      }
  
      const users = await User.find(query).select("-password");
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch users" });
    }
  };

// Block user
exports.blockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.status = "blocked";
    await user.save();

    res.status(200).json({
      message: "User blocked successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to block user" });
  }
};

// Unblock user
exports.unblockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.status = "active";
    await user.save();

    res.status(200).json({
      message: "User unblocked successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to unblock user" });
  }
};
