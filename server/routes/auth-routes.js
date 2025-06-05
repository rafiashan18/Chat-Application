const express = require("express")

const router = express.Router();

const {signupController,loginController,userInfoController,logoutController} = require("../controller/auth-controller")
const authMiddleware = require('../middleware/authMiddleware')
router.post("/signup",signupController);
router.post("/login",loginController);
router.get("/user-info",authMiddleware,userInfoController);
router.post("/logout",authMiddleware,logoutController);


module.exports=router;
