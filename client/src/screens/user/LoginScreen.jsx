import React from 'react'
import LoginForm from '../../forms/loginForm'
import { NavLink } from 'react-router-dom'
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { useState } from 'react';

const LoginScreen = () => {
    const [loading ,setLoading] = useState(false);
    return (
        <>
           {loading ? <LoadingSpinner/>: <div className="w-[100%] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl py-3 px-6 w-full max-w-md">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-blue-600 mb-2 "> Welcome Back </h2>
                        <p className="text-gray-600">Log in to continue <span className='text-yellow-500 font-semibold'>chatting</span></p>
                    </div>

                    <LoginForm onLoadingChange={setLoading}/>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Doesn't have an account?{' '}
                            <NavLink to="/signup" className="text-blue-600 hover:text-yellow-500 duration-300 font-medium">
                                Sign up
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
}
        </>
    )
}

export default LoginScreen