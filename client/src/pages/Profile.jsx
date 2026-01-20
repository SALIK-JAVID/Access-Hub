import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();
    const boxRef =useRef(null);  //this will create a refrence object so that react can have a direct access to the DOM elements.
    const[visible , setVisible] = useState(false);

    // this is the logic:
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting);
        },
        { threshold: 0.5 } //50% visibility 
      );
      
      if (boxRef.current) observer.observe(boxRef.current);
  
      return () => observer.disconnect();
    }, []);


  return (
    <> 
    {/* example of intersection observer. */}
     <div style={{ height: "150vh", padding: "40px" }}>
      <h2>Scroll Down to </h2>

      <div
        ref={boxRef}
        style={{
          marginTop: "500px",
          padding: "30px",
          border: "2px solid #444",
          background: visible ? "#c8f7c5" : "#f2f2f2",
          transition: "0.3s"
        }}
      >
        {visible ? "I am visible now!" : "Waiting to appear..."}
      </div> 
    </div>
    
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
    </>
  )
}

export default Profile
