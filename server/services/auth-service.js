const User = require("../models/User")
const { hashedPassword, comparePassword } = require('../utils/hash-password')
const generateToken = require('../utils/token')

const signup = async (userData) => {
    console.log("hello")
    const { name, email, password, confirmpassword } = userData;

    if (password != confirmpassword) {
        throw new Error("Passwords don't match")
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User exits")

    }

    // const hashedPassword = await hashedPassword(password);
    const hashPassword = await hashedPassword(password);

    const user = new User({
        name,
        email,
        password: hashPassword,

    })

    await user.save();
    const token = await generateToken({ id: user._id, email: user.email });

    return { user, token };
}

const login = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User doesn't exist")
    }

    const isPasswordMatched = await comparePassword(password, user.password)

    if (!isPasswordMatched) {
        throw new Error("Password is Incorrect")
    }

    const token = await generateToken({ _id: user._id, email: user.email })
    console.log("service lvl token:", token)
    return { user: { name: user.name, email: user.email, role: user.role }, token }

}
const userInfo = async (userId) => {
const user = await User.findOne({"_id":userId});

if (!user) {
        throw new Error("User doesn't exist")
    }

    return {name: user.name, email: user.email, role: user.role}
}

const logout = async (data) => {
    return { message: "User has been logged out" }
}
module.exports = { signup, login,userInfo, logout }