const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    console.log(req.cookies.token)
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ "error": "Access Denied. No Token Provided" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        console.log(decoded)
        next();
    }
    catch (err) {
        return res.status(500).json({ "error": `Invalid or Expired Toke ${err}` })
    }
}

module.exports = authMiddleware;