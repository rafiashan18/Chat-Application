import React from 'react'
import { IoSendSharp } from "react-icons/io5";
import UploadButton from './chatInput/UploadButton';
import EmojiPicker from './chatInput/EmojiPicker';
import VoiceButton from './chatInput/VoiceButton';

const ChatInput = () => {
  return (
    <div className=' w-[98%] p-2 rounded-lg flex items-center bg-zinc-800'>
     <div className='w-[95%]  flex items-center space-x-2 '>
        <UploadButton/>
        <EmojiPicker/>
      <form className='flex w-full gap-3' action="">
        <input type="text"
          placeholder="Type a message"
          className=" p-2 w-full outline-0 bg-transparent focus:ring-0 focus:outline-none grow border-0"
        />
        <button className=' hover:cursor-pointer'>
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