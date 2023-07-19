// import { Link } from 'react-router-dom';
// import React from 'react'
// import {    useDispatch, useSelector } from 'react-redux'
// import { useState,useEffect } from 'react';
// import { getPasswordResetToken } from '../services/operations/authAPI';

// const ForgotPassword = () => {

//     const [emailSent, setEmailSent] = useState(false);
//     const [email, setEmail] = useState("");
//     const { loading } = useSelector((state) => state.auth);
//     const dispatch =useDispatch();

//     const handleOnSubmit =(e)=>{
//         e.preventDefault();
//         dispatch(getPasswordResetToken(email, setEmailSent))
//     }

//     return (
//         <div  className='   text-white flex items-center justify-center'>
//             {

//                 loading ? (<div>Loading....</div>)
//                     :
//                     (
//                         <div className=' border flex flex-col gap-4 p-5 w-[400px]  '>
//                             <h1 >
//                                 {
//                                     !emailSent ? "Reset your password." : "Check Your Email" 
//                                 }
//                             </h1>
//                             <p>
//                                 {
//                                     !emailSent ?
//                                         "Have no fear. We will email you instructions to reset your password. If you don't have access to your email we can try account recovery" :
//                                         `We have sent the result to ${email} `
//                                 }
//                             </p>

//                             <form onSubmit={handleOnSubmit}>
//                                 {
//                                     !emailSent && (
//                                         <label >
//                                             <p>Email Address*</p> 
//                                             <input className=' w-full p-6 bg-richblack-600 text-richblack-5'
//                                                 required
//                                                 type='email'
//                                                 name='email'
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                             placeholder='Enter your email Address'
//                                             />
//                                         </label>
//                                     )

//                                 }
//                                 <button type='submit'>
//                                     {
//                                         !emailSent ? "Reset Password" : "Resend Email"
//                                     }
//                                 </button>

//                             </form>

//                             <div>
//                                 <Link to="/login">
//                                     <p>Back to Login</p>
//                                 </Link>
//                             </div>

//                         </div>
//                     )

//             }

//         </div>
//     )
// }

// export default ForgotPassword


import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getPasswordResetToken } from "../services/operations/authAPI"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            {!emailSent ? "Reset your password" : "Check email"}
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="form-style w-full"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!emailSent ? "Sumbit" : "Resend Email"}
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword