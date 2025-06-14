import React, { useEffect, useRef } from 'react'
import ChatBubble from '../chat/ChatBubble'
import { useSelector } from 'react-redux'
import { useGetMessagesQuery } from '../../../features/messages/messagesApi'

const ChatBody = () => {
  const selectedUserId = useSelector((state) => state.chat.selectedUserId)
  const { data: messagesData, isLoading } = useGetMessagesQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  const scrollRef = useRef(null)

  if (!selectedUserId) return <div>Select a user to start chatting</div>;
  if (isLoading) return <div>Loading messages...</div>;

  const messageList = messagesData?.messages || [];
  // console.log(messageList)

  useEffect(
    ()=>{
     scrollRef.current.scrollTo({
  top: scrollRef.current.scrollHeight,
  // behavior: 'smooth'
});
    },[messagesData]
  )
  return (
    <div 
    ref={scrollRef}
    className='flex-1 p-4 scrollbar-hide overflow-y-auto scroll-smooth'>
      
        {messageList.length ? (
          messageList.map((msg) => (
            // console.log(msg)
           
              <ChatBubble key={msg._id} message={msg} />
            
          ))
        ) : (
          <div className="text-gray-400 w-full flex justify-center items-center  h-[100%] ">No messages yet.</div>

        )}
      
    </div>
  );
}

export default ChatBody
