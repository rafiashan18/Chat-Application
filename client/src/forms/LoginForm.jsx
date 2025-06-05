import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { CiMail } from 'react-icons/ci';
import { IoLockClosedOutline } from 'react-icons/io5';
import { LuEyeOff } from 'react-icons/lu';
import { FiEye } from 'react-icons/fi';
import { useLoginMutation } from '../features/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/userSlice'; 

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().min(5, "Password length should be atleast 5").required("Password must be entered")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(
    { resolver: yupResolver(schema) }
  );

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await login(data).unwrap();
      console.log(response)
      
      // Store user data in Redux
      dispatch(setUser(response.user));
      
      navigate('/')
    }
    catch (err) {
      console.error('Login failed:', err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 text-gray-700   md:space-y-3">

        {/* Email Field */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiMail className="h-5 w-5 text-blue-200" />
            </div>
            <input
              type="email"
              {...register('email')}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg transition-all duration-200
              ${errors.email
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400'}
              focus:ring-1 focus:outline-none
            `}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoLockClosedOutline className="h-5 w-5 text-blue-200" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              {...register('password')}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg transition-all duration-200
              ${errors.password
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400'}
              focus:ring-1 focus:outline-none
            `}
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-yellow-600"
            >
              {showPassword ? <LuEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="text-red-500 text-sm">
            {error.data?.message || 'Login failed'}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-400 shadow-lg disabled:opacity-50"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm