import React from 'react'

const ChatItem = () => {
  return (
    <>
     <div className='flex p-1 hover:bg-slate-800 hover:cursor-pointer duration-300 rounded-md items-center gap-3'>
            <div className="avatar avatar-online">
                <div className="w-13 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <div>
                <h5 className='font-medium'>Ahmedd</h5>
                <p className='text-gray-400 text-sm'>ahmed@gmail.com</p>
            </div>
        </div>
    </>
  )
}

export default ChatItem