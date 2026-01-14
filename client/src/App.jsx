import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/Profile'
import Admin from './pages/Admin'
const App = () => {
  
  return (
    <BrowserRouter>
    <ToastContainer position='top-right' />
    {/* Routes is the container and route specifies one url */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/admin" element={<Admin />} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}

      <Route 
      path="/dashboard" element={
        <ProtectedRoute >
       <Dashboard />
       </ProtectedRoute>}
       />
       <Route
       path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
       }
        />

    </Routes>
    </BrowserRouter>
  )
}

export default App
