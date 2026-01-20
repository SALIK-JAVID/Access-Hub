import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'; //adding lazy loading and infinite scroll effect.
import { useEffect } from 'react';
import { useState } from 'react';
const Dashboard = () => {
const [count, setCount] = useState(10); //ten initally
const loaderRef = useRef(null);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
      };

      const profile = () =>{
        navigate("/profile");
      };   
  //  lazy loaading and infinite scroll: logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount( count + 10 ); // load 10 more
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current); //that value 
    }

    return () => observer.disconnect();   //stop watching the elements.
  }, []);
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
      {/* Displaying Avatar from dice-bear */}
       <div className='p-6'>
       <h1 className='text-xl font-bold mb-4'>User Avatars</h1>
       <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <img
            key={index}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`}
            alt="avatar"
            className="w-20 h-20"
          />
        ))}
      </div>

      {/* This div triggers loading more */}
      <div ref={loaderRef} className="h-10"></div>

      </div>

    </div>
    </>
    
  )
}

export default Dashboard
