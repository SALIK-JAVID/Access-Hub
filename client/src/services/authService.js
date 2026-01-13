// Axios will help to make api calls from the backend
// it is used for HTTP requests from the browser.
import axios from "axios"
const API_URL = "http://localhost:3000/api/auth";

export const registerUser = async (data) => {
    return axios.post(`${API_URL}/register`, data); //here the data is name, email, and password.
  };
  
  export const loginUser = async (data) => {
    return axios.post(`${API_URL}/login`, data);
  };
