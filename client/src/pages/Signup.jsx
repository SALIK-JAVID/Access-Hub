import React from 'react'
import { useState } from 'react'
import { registerUser } from '../services/authService'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });
    const  navigate = useNavigate(); //react hook that acts as maps for the /
    //e = event that contains all the information about the recents clicks that happens in the browser.
    const handleChange =(e) => {
        setFormData ({
            ...formData, [e.target.name]: e.target.value 
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); //tells the browser to stop its automatic behaviour, js will handle the action.
        try {
            await registerUser(formData);
            toast.success("Registered successfully!");
            navigate("/login");
          } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
          }
        };
    

    
  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <img src='/default-monochrome-black.svg'/>
        <h2 className="text-2xl font-bold mb-4 text-center">
            Sign Up
            </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" >
          Sign Up
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
    </>
  )
}

export default Signup
