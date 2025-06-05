import React from 'react'
import ChatItem from './chatItem'

const ChatList = () => {
  return (
    <div className=' scrollbar overflow-y-auto space-y-3'>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
    </div>
  )
}

export default ChatList