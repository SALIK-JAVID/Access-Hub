import React from 'react'
import { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../services/authService'


const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });
  
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const res = await loginUser(formData);
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful!");
    
        const redirectTo = location.state?.from?.pathname || "/dashboard";
        navigate(redirectTo);
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
      }
    }; 
  
    return (
        <>
    
      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        
        
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
            <img src='/cover.png' />
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
  
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
  
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Login
          </button>
  
          <p className="text-sm text-center mt-3">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      </>
    );
  };
  
  export default Login;