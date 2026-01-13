// Axios will help to make api calls from the backend
// it is used for HTTP requests from the browser.
import axios from "axios"
// const API_URL = "http://localhost:3000/api/auth";
const API_URL = axios.create({
  origin: "https://access-hub-five.vercel.app",
  credentials: true
})

export const registerUser = async (data) => {
    return axios.post(`${API_URL}/register`, data,{credentials: true}); //here the data is name, email, and password.
  };
  
  export const loginUser = async (data) => {
    return axios.post(`${API_URL}/login`, data,{credentials: true});
  };
