import React from 'react'
import { useSelector } from 'react-redux'

const ChatBubble = ({ message }) => {
  const currentUserId = useSelector((state) => state.user.user.userId) // adjust based on your Redux structure
//  console.log("currentUserId:",currentUserId)
  const isSentByCurrentUser = message.senderId === currentUserId
  const alignment = isSentByCurrentUser ? 'chat-end' : 'chat-start'
  const bubbleColor = isSentByCurrentUser ? 'chat-bubble-primary' : 'chat-bubble-secondary'

  return (
    <div className={`chat ${alignment} my-4`}>
      <div className={`chat-bubble ${bubbleColor}`}>
        {message.message}
        
      </div>
    </div>
  )
}

export default ChatBubble
