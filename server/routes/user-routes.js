const express = require("express")

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const { getAllUsers } = require("../controller/user-controller");
router.get("/allUsers", authMiddleware, getAllUsers);

module.exports = router;
