const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const generateToken = async (payload) => {

    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1hr' });

}


module.exports = generateToken
