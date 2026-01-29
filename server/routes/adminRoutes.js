const express = require("express")
const router = express.Router();
const {
    getAllUsers,
    blockUser,
    unblockUser,
    createUser,
    deleteUser,
    restoreUser,
} =require("../controllers/adminController");

router.get("/users",getAllUsers)
router.put("/block/:id",blockUser)
router.put("/unblock/:id",unblockUser)  //first the route then param
// admin can create the user himself
router.post("/users",createUser)
// admin can delete the user :
router.delete("/users/:id", deleteUser)
router.put("/restore/:id", restoreUser)
module.exports = router;