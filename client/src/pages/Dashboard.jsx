import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'; //adding lazy loading and infinite scroll effect.
import { useEffect } from 'react';
import { useState } from 'react';
const TOTAL_USERS = 50;
const LOAD_COUNT = 10;
const Dashboard = () => {
const [visibleCount, setVisibleCount] = useState(LOAD_COUNT); //ten initally
const loaderRef = useRef(null);


// create dummy users
const users = Array.from({ length: TOTAL_USERS }, (_, i) => ({
  id: i + 1,
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${i + 1}`,
}));

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
      ([entry]) => {
        if (
          entry.isIntersecting &&
          visibleCount < users.length
        ) {
          setVisibleCount((prev) => prev + LOAD_COUNT);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [visibleCount, users.length]);
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
      <div className="p-6">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
      User Dashboard
    </h2>

    {/* Avatar Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {users.slice(0, visibleCount).map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-center bg-gray-100 rounded-xl p-2 shadow-sm hover:shadow-md transition"
        >
          <img
            src={user.avatar}
            alt="avatar"
            loading="lazy"
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>
      ))}
    </div>

    {/* Intersection Observer Target */}
    <div
      ref={loaderRef}
      className="h-10 flex items-center justify-center mt-6 text-sm text-gray-500"
    >
      {visibleCount < users.length && "Loading more users..."}
    </div>
  </div>

        </div>
    </>
    
  )
}

export default Dashboard
