// Axios will help to make api calls from the backend
// it is used for HTTP requests from the browser.
import axios from "axios"
// const API_URL = "http://localhost:3000/api/auth";
const API_URL = axios.create({
  baseURL: "https://access-hub-yc3e.onrender.com/api/auth",    //for rendering
  // baseURL:"http://localhost:8000/api/auth",  //for local host
  withCredentials: true,
});

export const registerUser = async (data) => {
    return API_URL.post("/register", data); //here the data is name, email, and password.
  };
  
  export const loginUser = async (data) => {
    return API_URL.post("/login", data);
  };
