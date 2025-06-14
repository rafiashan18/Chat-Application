import React from 'react'
import { useSelector } from 'react-redux'

const ChatHeader = () => {
    const {user} = useSelector(state => state.user)
    const selectedUserName = useSelector((state) => state.chat.selectedUserName)
    
    const altImage = "https://res.cloudinary.com/dab8gj2ho/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1749346196/user_nrh6e1.png"
    return (
        <>
            <div className='grid grid-cols-3 p-2 bg-gray-800'>
                <div className='flex items-center gap-3  col-span-2'>
                    <div className="avatar avatar-online hover:cursor-pointer">
                        <div className="w-13 rounded-full">
                            <img src={user.profilePictue || altImage } alt="pfp" />
                        </div>
                    </div>
                    <div className='w-full p-1 hover:bg-slate-950/30 cursor-pointer rounded-lg duration-300'>
                        <h5 className='font-medium'>{selectedUserName}</h5>
                        <p className='text-gray-400 text-sm'>offline</p>
                    </div>
                </div>
                <div className=''>
                    {/* icons for call  */}
                </div>
            </div>

        </>
    )
}

export default ChatHeader