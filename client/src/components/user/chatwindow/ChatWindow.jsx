import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatInput from '../chat/chatInput/ChatInput'
import { useSelector } from 'react-redux'

const ChatWindow = () => {
  const selectedUserId = useSelector((state) => state.chat.selectedUserId)
   console.log(selectedUserId)
  return (
    <div className=' bg-slate-900 h-screen flex flex-col relative w-[70%]'>
     {selectedUserId == null ? <div className=' h-full flex justify-center items-center text-gray-300 '>Select a user to chat with</div>:(
      <>
       <ChatHeader/>
      <ChatBody/>
      <div className='flex justify-center mb-3.5 w-[100%]'>
        <ChatInput/>
      </div>
      </>
     )}
    </div>
  )
}

export default ChatWindow