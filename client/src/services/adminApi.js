import axios from "axios";

// this call the backend admin api
const API_BASE_URL = "https://access-hub-yc3e.onrender.com/api/admin";

// Get all users
export const getAllUsers = async (search="") => {
  const res = await axios.get(`${API_BASE_URL}/users`,{
params: { search }  
  });
  return res.data; 
};

// Block user
export const blockUser = async (id) => {
  const res = await axios.put(`${API_BASE_URL}/block/${id}`);
  return res.data;
};

// Unblock user
export const unblockUser = async (id) => {
  const res = await axios.put(`${API_BASE_URL}/unblock/${id}`);
  return res.data;
};
