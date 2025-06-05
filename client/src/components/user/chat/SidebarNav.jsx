import React from 'react'
import LogoutButton from '../../common/logoutButton'
import { useLogoutMutation } from '../../../features/auth/authApi'

const SidebarNav = () => {
  const [logout, { isLoadiing, errors }] = useLogoutMutation();
  const handleLogout = async () => {
    await logout().unwrap();
  }
  return (
    <div className='flex w-full h-screen items-end justify-center'>
      <div className='p-2 border-t border-white/30'>
         <LogoutButton />
      </div>
    </div>
  )
}

export default SidebarNav