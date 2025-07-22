import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
  return (
    
    <div className='text-center'>
      <h1>Login Page</h1>
      <button onClick={()=>{navigate('/User/Home')}}>Go</button>
    </div>
  )
}
