import React, { useEffect } from 'react'

const ChatItem = ({user}) => {
  
  return (
    <>
     <div className='flex p-1 hover:bg-slate-800 hover:cursor-pointer duration-300 rounded-md items-center gap-3'>
            <div className="avatar avatar-online">
                <div className="w-13 rounded-full">
                    <img src={user.profilePicture } />
                </div>
            </div>
            <div>
                <h5 className='font-medium'>{user.name}</h5>
                <p className='text-gray-400 text-sm'>{user.email}</p>
            </div>
        </div>
    </>
  )
}

export default ChatItem