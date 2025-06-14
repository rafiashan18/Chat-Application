import React, { useEffect, useState } from 'react'
import ChatItem from './chatItem'
import { useAllUsersQuery } from '../../../features/user/userApi'
import LoadingSpinner from '../../common/LoadingSpinner'
const ChatList = () => {

  const { data: users, isLoading, error } = useAllUsersQuery();
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    if (users) {
      // console.log(users);

    }
    if (error) {
      console.error('Error fetching users:', error);
    }
  }, [users, error]);
  if (isLoading) {
    return <><LoadingSpinner/></>;
  }
  return (
    <div className=' scrollbar overflow-y-auto space-y-3'>
      <div>
        {
          users.map(
            (user) => <ChatItem
              key={user._id}
              user={user}
              isSelected={selectedUserId === user._id}
              onSelect={() => setSelectedUserId(user._id)}
            />

          )
        }
      </div>

    </div>
  )
}

export default ChatList