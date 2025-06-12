import React, { useEffect } from 'react'
import ChatItem from './chatItem'
import { useAllUsersQuery } from '../../../features/user/userApi'

const ChatList = () => {

  const {data: users , isLoading , error} = useAllUsersQuery();
  
   useEffect(() => {
    if (users) {
      console.log(users); 
    
    }
    if (error) {
      console.error('Error fetching users:', error); 
    }
  }, [users, error]);
  if (isLoading) {
    return <div>Loading...</div>; 
  }
  return (
    <div className=' scrollbar overflow-y-auto space-y-3'>
     <div>
       {
        users.map(
          (user) => <ChatItem key={user._id} user={user}/>
         
        )
      }
     </div>
       
    </div>
  )
}

export default ChatList