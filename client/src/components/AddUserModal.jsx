import React from 'react'
import { useState } from 'react'
const AddUserModal = ({onClose, onSubmit}) => {
    const[formData, setFormData] =useState({
        name:"",
        emial:"",
        password:"",

    });
    const handleChange= (e) =>{
        setFormData ({
            ...formData, [e.target.name]: e.target.value 
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault(); //t tells the browser, "Don't reload the page; I'll handle this with JavaScript."
        onSubmit(formData);
        onClose();
      };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-100">
        <h3 className="text-lg font-semibold mb-4">Add User</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUserModal
