import React from 'react'
import SidebarNav from '../../components/user/chat/SidebarNav'
import ChatSidebar from '../../components/user/chat/ChatSidebar'
import ChatWindow from '../../components/user/chatwindow/ChatWindow'

const ChatScreen = () => {
  return (
    <>
       <div className='flex w-screen h-screen'>
        <div className=' flex justify-between w-[40%]   '>
          <div className=' border border-white/20 w-[15%]'>
            <SidebarNav />
          </div>
          <ChatSidebar />

        </div>
        <ChatWindow />      
      </div>
    </>
  )
}

export default ChatScreen