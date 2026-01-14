// it maps the url of the controller function.
const express = require('express');

const router = express.Router();
const {
    registerUser,
    loginUser
} = require("../controllers/authController");
const{
    getAllUsers,
    blockUser,
    unblockUser
} = require("../controllers/adminController");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/users",getAllUsers);
router.put("/block/:id", blockUser);
router.put("/unblock/:id",unblockUser);

module.exports = router;
