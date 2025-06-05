import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useLogoutMutation } from '../../features/auth/authApi';

const LogoutButton = () => {
  const [logout, { isLoading, error }] = useLogoutMutation(); // Fixed 'errors' to 'error'
  
  const handleLogout = async () => {
    try {
      console.log("Attempting logout...");
      const result = await logout().unwrap();
      console.log("Logout successful:", result);
      // You might want to redirect or clear local state here
      // For example: navigate('/login') or dispatch(clearUser())
    } catch (err) {
      console.error("Logout failed:", err);
      // Handle error appropriately - maybe show a toast notification
    }
  }

  return (
    <div className=''>
      <button 
        onClick={handleLogout} 
        disabled={isLoading}
        className={isLoading ? 'opacity-50 cursor-not-allowed' : ''}
      > 
        <CiLogout className='text-4xl p-2 hover:cursor-pointer hover:bg-slate-600 rounded-lg duration-300'/>
      </button>
      {error && <p className="text-red-500 text-sm mt-1">Logout failed</p>}
    </div>
  )
}

export default LogoutButton