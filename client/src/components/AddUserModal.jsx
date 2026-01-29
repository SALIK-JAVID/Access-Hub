import React from 'react'
import { useState } from 'react'


const AddUserModal = ({onClose, onSubmit}) => {

  // controlling the create state:
const [isCreating, setIsCreating] = useState(false);

    const[formData, setFormData] =useState({
        name:"",
        email:"",
        password:"",

    });
    const handleChange=  (e) =>{
        setFormData ({
            ...formData, [e.target.name]: e.target.value 
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault(); //t tells the browser, "Don't reload the page; I'll handle this with JavaScript."
        try {
          setIsCreating(true); 
          await onSubmit(formData); // wait for API 
          onClose(); 
        } catch (error) {
          // error toast already handled in Admin.jsx
        } finally {
          setIsCreating(false); 
        }

        // we dont have to close the table early
        // onSubmit(formData);
        // onClose();
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
            className="w-full border px-3 py-2 rounded disabled:opacity-60"
            disabled={isCreating}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded disabled:opacity-60"
            disabled={isCreating}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded disabled:opacity-60"
            disabled={isCreating}
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isCreating}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isCreating}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              {isCreating ? "Creating User..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUserModal
