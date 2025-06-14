const { sendMessageService, getMessageService } = require("../services/message-service")

const sendMessage = async (req, res) => {
    try {
        const { message } = await sendMessageService(req);
        console.log(message)
        res.status(201).json({ message: "Message sent", "newMessage": message })
    }
    catch (err) {
        console.log("Error in sending message", err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const getMessage = async (req, res) => {
    try {
        const { messages, notFound } = await getMessageService(req);
        if (notFound) {
            res.status(201).json({})
        }
        console.log(messages)
        res.status(201).json({ messages: messages })
    }
    catch (err) {
        console.log("Error in sending message", err)
        res.status(500).json({ message: "Internal Server Error" + err })
    }
}

module.exports = {
    sendMessage,
    getMessage
}