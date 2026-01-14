const express = require("express")
const router = express.Router();
const {
    getAllUsers,
    blockUser,
    unblockUser,
} =require("../controllers/adminController");

router.get("/users",getAllUsers)
router.put("/block/:id",blockUser)
router.put("/unblock/:id",unblockUser)  //first the route then param
module.exports = router;