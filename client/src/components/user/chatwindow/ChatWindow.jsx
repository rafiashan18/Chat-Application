import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatInput from '../chat/ChatInput'

const ChatWindow = () => {
  return (
    <div className=' bg-slate-900 h-screen flex flex-col relative w-[70%]'>
      <ChatHeader/>
      <ChatBody/>
      <div className='flex justify-center mb-3.5 w-[100%]'>
        <ChatInput/>
      </div>
    </div>
  )
}

export default ChatWindow