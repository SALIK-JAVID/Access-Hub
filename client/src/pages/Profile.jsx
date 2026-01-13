import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-3xl font-bold mb-4'>
            Access Hub Profile
        </h1>
        <img src='/header_img.png'
        className='h-45'/>
        <p>
          This is the profile section of your Access Hub
        </p>
      <button 
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-5'
      onClick={() => {
        navigate("/dashboard")
      }}>
      ⬅︎ Back To Dashboard
      </button>
    </div>
  )
}

export default Profile
