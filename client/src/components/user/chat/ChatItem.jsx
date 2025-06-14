import React, { useEffect } from 'react'
import { useGetMessagesQuery } from '../../../features/messages/messagesApi'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUserId, setSelectedUserName} from '../../../features/messages/chatSlice';

const ChatItem = ({ user, isSelected, onSelect }) => {
  const { data, isLoading, error } = useGetMessagesQuery(user._id);
  const selectedUserId = useSelector((state)=> state.chat.selectedUserId)
  const dispatch = useDispatch();
  const getSelectedUserMessages = async () => {
    // console.log(user._id)
    // console.log(data)
    dispatch(setSelectedUserId(user._id))
    dispatch(setSelectedUserName(user.name))
    onSelect();
  }
  return (
    <>
      <div
        className={`flex p-1 hover:bg-slate-800 cursor-pointer duration-300 rounded-md items-center gap-3 
        ${isSelected ? 'bg-gray-800' : ''}`}
         onClick={getSelectedUserMessages}
      >

        <div className="avatar avatar-online">
          <div className="w-13 rounded-full">
            <img src={user.profilePicture} />
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