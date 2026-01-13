import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
      };

      const profile = () =>{
        navigate("/profile");
      };   

  return (
    <>
    <div className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-4'>
            Access Hub
        </h1>
        <p className="mb-6">You are logged in successfully to Access Hub</p>
        <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 "
      >
        Logout
      </button>
      <button
        onClick={profile}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-5"
      >
        Profile
      </button>

        </div>
    </>
    
  )
}

export default Dashboard
