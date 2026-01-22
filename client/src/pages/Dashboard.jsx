import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'; //adding lazy loading and infinite scroll effect.
import { useEffect } from 'react';
import { useState } from 'react';
// const TOTAL_USERS = 1000; we are not keeping the 1000 users fetched instead we will use scroll based pagination.
const LOAD_COUNT = 10;

const Dashboard = () => {
const [users, setUsers] = useState([]); //ten initally/fetching users....
 
const[isLoading, setIsLoading] = useState(false)   //this prevents duplicate fetching
const loaderRef = useRef(null);


const fetchUsers = async () =>{
  if (isLoading) return;
  setIsLoading(true);
//simulating a network delay: just to mimic the action of api
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const startId = users.length + 1;

  const newUsers = Array.from({ length: LOAD_COUNT } , (_, i) => ({
    id: startId + i,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${ startId + i}`,
  }));

  // append users
  setUsers((prev) => [...prev, ...newUsers]);
  setIsLoading(false);
  
}



    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
      };

      const profile = () =>{
        navigate("/profile");
      };
      
      //  Initial fetchinvg the user
  useEffect(() => {
    fetchUsers();
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          fetchUsers();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();  //lets the observer not to observe.
  }, [isLoading]);

  // making a fake UI that will run untill the new users are fetched.
const AvatarSkeleton = () => {
  <div className='flex items-center justify-center bg-gray-100 rounded-xl p-2 shadow-sm'>
    <div className='w-20 h-20 rounded-lg bg-grey-200 animate-pulse'/>

  </div>
}
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
      User Avatars
    </h2>

    {/* Avatar Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {users.map((user) => (
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

      {/* adding skeleton loaders...... */}
      {isLoading &&
    Array.from({ length: LOAD_COUNT }).map((_, idx) => (
      <AvatarSkeleton key={`skeleton-${idx}`} />
    ))}
    </div>

    {/* Intersection Observer Target */}
    <div
      ref={loaderRef}
      className="h-10 flex items-center justify-center mt-6 text-sm text-gray-500"
    >
      {isLoading && "Loading more users...."}
    </div>
  </div>

        </div>
    </>
    
  )
}

export default Dashboard
