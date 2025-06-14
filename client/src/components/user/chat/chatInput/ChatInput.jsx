import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import UploadButton from './UploadButton';
import EmojiPicker from './EmojiPicker';
import VoiceButton from './VoiceButton';
import { useSelector } from 'react-redux'
import { useSendMessageMutation } from '../../../../features/messages/messagesApi';
const ChatInput = () => {
  const [textMessage , setTextMessage]= useState("")
  const {selectedUserId}=useSelector((state)=>state.chat)
  const [sendMessage, {isLoading , error}]= useSendMessageMutation();
const handleInput = async (e)=>{
  e.preventDefault()
  console.log(textMessage)
  console.log(selectedUserId)
  try{
   const response =  await sendMessage({
      id:selectedUserId,
      message:textMessage
    }).unwrap()
   console.log(response)
    setTextMessage("")
  }
  catch(err){
        console.error("Failed to send message:", err);

  }
 
}
  return (
    <div className=' w-[98%] p-2 rounded-lg flex items-center bg-zinc-800'>
     <div className='w-[95%]  flex items-center space-x-2 '>
        <UploadButton/>
        <EmojiPicker/>
      <form className='flex w-full gap-3' onSubmit={handleInput}>
        <input type="text"
          placeholder="Type a message"
          value={textMessage}
          onChange={(e)=>setTextMessage(e.target.value)}
          className=" p-2 w-full outline-0 bg-transparent focus:ring-0 focus:outline-none grow border-0"
        />
        <button type='submit' className=' hover:cursor-pointer'>
          <IoSendSharp className='text-2xl' />
        </button>
      </form>
      </div> 
     <div className='flex items-center justify-center w-[5%] h-[100%]'>
       <VoiceButton/>
     </div>
    </div>
  )
}

export default ChatInput