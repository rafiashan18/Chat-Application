const Conversation = require("../models/Conversation.model");
const Message = require("../models/MessageModel");

const sendMessageService = async (req) => {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
    });

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    });

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
            messages: [newMessage._id]
        });

    } else {
        conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    return { message };
};

const getMessageService = async (req) =>{
    const { id: chatUser } = req.params;
    const senderId = req.user._id;
    console.log(senderId,chatUser)
    const conversation = await Conversation.findOne({
        participants:{$all:[senderId,chatUser]}
    }).populate("messages")

    if(!conversation){
       return {messages:null , notFound:true}
    }

    const messages = conversation.messages;
    return {messages:messages, notFound:false}
}

module.exports = {sendMessageService,getMessageService};