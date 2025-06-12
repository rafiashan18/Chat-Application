const mongoose = require("mongoose")
const User = require('./User')
const messageScema = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true,
        maxLength: 750,
        trim: true,
        validate: [
            {
                validator: (value) => value.length > 0,
                message: "Message cannot be empty"
            }
        ]
    }},
    {
        timestamps: true,
    }
)


const Message = mongoose.model("Message", messageScema)
module.exports = Message