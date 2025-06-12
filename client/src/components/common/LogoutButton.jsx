import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useLogoutMutation } from '../../features/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../features/auth/userSlice';

const LogoutButton = () => {
  const [logout, { isLoading, error }] = useLogoutMutation(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      console.log("Attempting logout...");
      const result = await logout().unwrap();
      console.log("Logout successful:", result);

      navigate('/login')
      dispatch(clearUser())
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <div className=''>
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className={isLoading ? 'opacity-50 cursor-not-allowed' : ''}
      >
        <CiLogout className='text-4xl p-2 hover:cursor-pointer hover:bg-slate-600 rounded-lg duration-300' />
      </button>
      {error && <p className="text-red-500 text-sm mt-1">Logout failed</p>}
    </div>
  )
}

export default LogoutButton