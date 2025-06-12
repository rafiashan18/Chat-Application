const express = require('express');
const router = express.Router();

const { sendMessage,getMessage } = require('../controller/message-controller');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/send/:id',authMiddleware, sendMessage)
router.get('/get/:id',authMiddleware, getMessage)

module.exports = router