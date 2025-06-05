import React from 'react'
import SignupForm from '../../forms/signupForm'
import { NavLink } from 'react-router-dom'
const SignupScreen = () => {
    

    return (
        <>
            <div className="w-[100%] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-3 w-full max-w-md">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-blue-600 mb-2 ">Create Account</h2>
                        <p className="text-gray-600">Join us today and <span className='text-yellow-500 font-semibold'>start chatting</span></p>
                    </div>

                    <SignupForm />
                    
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <NavLink to="/login" className="text-blue-600 hover:text-yellow-500 duration-300 font-medium">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupScreen