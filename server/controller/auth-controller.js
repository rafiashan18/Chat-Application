const { signup, login, userInfo, logout } = require("../services/auth-service");
const setTokenCookie = require("../utils/cookie");

const signupController = async (req, res) => {
    try {
       
        const { user, token } = await signup(req.body);
        setTokenCookie(res, token)
        res.status(201).json({
            message: "User registered",
            user: { name: user.name, email: user.email }
        });

    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginController = async (req, res) => {
    try {
        const { user, token } = await login(req.body)
        setTokenCookie(res, token);
        res.status(201).json({ message: "Successfully Login", user: { name: user.name, email: user.email } });

    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const logoutController = async (req, res) => {
    try {
        await logout();
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.Node_ENV !== 'development',
            sameSite: 'Strict',
            maxAge: 3600000
        })

        res.status(200).json({ message: "User successfully logged out" })
    }
    catch (err) {
        res.status(500).json({ error: err.message });

    }
}

const userInfoController = async (req, res) => {
    try {
        
        const user = await userInfo(req.user._id);
        res.status(201).json({ message: "user data", user });

    }
    catch (err) {
        res.status(500).json({ error: err.message });

    }
}

module.exports = {
    signupController,
    loginController,
    logoutController,
    userInfoController
}