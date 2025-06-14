import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { useSignupMutation } from '../features/auth/authApi';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signup, { isLoading, error }] = useSignupMutation();
  const navigate = useNavigate()


  const schema = yup.object().shape(
    {
      name: yup.string("Name must be entered").required("Name is required"),
      email: yup.string("Email must be entered").required("Email is required"),
      password: yup.string().min(8, 'Password must be atlead 8 yaracters kunch')
        .required('Password is required'),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password'),
    }
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  const onSubmit = async (data) => {
    console.log(data)
    try {
     const response =  await signup(data).unwrap();
     console.log(response)
     navigate('/login')
    }
    catch (err) {
      console.error('Signup failed:', err);
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 text-gray-600 md:space-y-3">
        {/* Name Field */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              < FaUser className="h-5 w-5 text-blue-200" />
            </div>
            <input
              type="text"
              {...register('name')}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg transition-all duration-200
              ${errors.name
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400'}
              focus:ring-1 focus:outline-none
            `}
              placeholder="Enter your full name"
            />

          </div>
          {errors.name && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              {errors.name.message}
            </p>
          )}
        </div>

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
              ${errors.name
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
              ${errors.name
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400'}
              focus:ring-1 focus:outline-none
            `}
              placeholder="Create a password"
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

        {/* Confirm Password Field */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">Confirm Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoLockClosedOutline className="h-5 w-5 text-blue-200" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register('confirmpassword')}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg transition-all duration-200
              ${errors.name
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400'}
              focus:ring-1 focus:outline-none
            `}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-yellow-600"
            >
              {showConfirmPassword ? <LuEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
            </button>
          </div>
          {errors.confirmpassword && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02]  transition-all duration-400 shadow-lg"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm