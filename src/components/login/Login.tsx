import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='login'>Login
        <div className='login-name'>
            <label htmlFor="">User Name:</label>
            <input type="text" /> <br />
        </div>
        <div className='login-pass'>
            <label htmlFor="">Password:</label>
            <input type="text" /> <br />
        </div>
    </div>
  )
}
