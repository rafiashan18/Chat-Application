import React from 'react'
import ChatBubble from '../chat/ChatBubble'

const ChatBody = () => {
  return (
    <div className='flex-1 p-4 scrollbar-hide overflow-y-auto scroll-smooth'>
        <ChatBubble/>
        <ChatBubble/>
        
      
       
    </div>
  )
}

export default ChatBody