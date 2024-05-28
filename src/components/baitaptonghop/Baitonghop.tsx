import React from 'react'
import './baitonghop.css'
export default function Baitonghop() {
  return (
    <div className='Login'>
        <div className='img' ><img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg" alt="" /></div>
        <div className='form'>
            <h2>Login</h2>
            <label>E-Mail</label>
            <br />
            <input type="text" placeholder='Placeholder content' />
            <br />
            <label>Password</label>
            <br />
            <input type="text" placeholder='Placeholder content' />
            <br />
            <br />
            <b className='Forgot'>Forgot password?</b>
            <br />
            <button className='Lg'>Login</button>
            <br />
            <br />
            <hr  />
            <button>Register now</button>
        </div>
    </div>
  )
}
