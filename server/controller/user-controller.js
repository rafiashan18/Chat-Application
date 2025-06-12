const { allUsers } = require("../services/user-service")

const getAllUsers = async (req, res) => {
    try {
       
        const users = await allUsers(req.user._id)
        res.status(201).json(users)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getAllUsers
}