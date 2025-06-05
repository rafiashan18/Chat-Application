import React from 'react'

const ChatHeader = () => {
    return (
        <>
            <div className='grid grid-cols-3 p-2 bg-gray-800'>
                <div className='flex items-center gap-3  col-span-2'>
                    <div className="avatar avatar-online hover:cursor-pointer">
                        <div className="w-13 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                        </div>
                    </div>
                    <div className='w-full p-1 hover:bg-slate-950/30 cursor-pointer rounded-lg duration-300'>
                        <h5 className='font-medium'>Ahmedd</h5>
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