const User = require("../models/User");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
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
