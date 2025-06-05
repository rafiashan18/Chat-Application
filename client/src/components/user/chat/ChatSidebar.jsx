import SearchBar from '../../common/SearchBar'
import ChatList from './ChatList'

const ChatSidebar = () => {
  return (
    <div className='h-screen flex flex-col p-2 space-y-3 bg-black text-white w-[85%]'>
   
        <h2 className='font-bold text-2xl my-2'>Chats</h2>
        <SearchBar />
        <hr className='text-white/30' />
        <ChatList />
       
        

    </div>
  )
}

export default ChatSidebar