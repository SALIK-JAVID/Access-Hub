<p align="center">
  <img src="./cover.png" alt="Access Hub Cover" width="100%" />
</p>

#  Access Hub - Authentication System

**Access Hub** is a modern, secure authentication system built using **React** and a **Node.js backend**, designed to demonstrate real-world authentication flows such as protected routes, login redirection, and local storage handling.

This project focuses on **clean architecture**, **user experience**, and **scalable authentication logic**, making it suitable for production use and a strong addition to a developer portfolio.

---

## Features

###  Implemented
- User **Signup & Login**
- **JWT-based authentication**
- **Protected routes** using React Router
- Automatic **redirection after login**
  - Users are redirected back to the page they originally tried to access
- Secure **logout**
- Clean UI styled with **Tailwind CSS**
- Notifications using **React Toastify**
- API communication via **Axios**

---

## 🧭 Authentication Flow

- New users sign up → redirected to login
- Logged-in users are redirected to the **Dashboard**
- Protected pages (e.g., Profile) require authentication
- If a user tries to access a protected route while logged out:
  - They are redirected to the login page
  - After successful login, they are redirected **back to the original page**

This behavior closely mirrors real-world authentication systems used in production apps.

---

## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 📂 Project Structure 

/access-hub (Root Folder)
├── client/                # React/Vite Frontend
│   ├── src/
│   ├── public/
│   ├── .gitignore         # Ignores frontend node_modules & dist
│   ├── package.json
│   └── vite.config.js
├── server/                # Node/Express Backend
│   ├── config/            # db.js lives here
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Auth routes
│   ├── .env               # (HIDDEN) Your MONGO_URI
│   ├── .gitignore         # Ignores backend node_modules & .env
│   ├── package.json
│   └── server.js
├── .gitignore             # Root ignore (handles .DS_Store, etc.)
└── README.md              # Project documentation


---

## Future Enhancements

The following features are planned to make **Access Hub** production-ready:

### 🔐 Authentication & Security
- Email verification using **6-digit OTP**
- Password reset via email
- Refresh token implementation
- Token expiration handling
- Role-based access control (Admin/User)

### 📧 Email Services
- SMTP integration for:
  - Account verification
  - Password reset
  - Login alerts

### ⚙️ Backend Improvements
- Centralized error handling
- Rate limiting for auth APIs
- Input validation using Joi / Zod
- API versioning
- Secure cookie-based auth option

### 🧑‍💻 User Experience
- Edit profile functionality
- Session persistence
- Account settings page
- Dark mode support

---

## Why This Project?

Access Hub was built to:
- Understand **real-world authentication patterns**
- Practice **secure frontend-backend integration**
- Demonstrate production-style routing logic
- Create a **resume-ready project** showcasing best practices

---
## Deployment 
We’ll deploy:
- Frontend → Vercel

- Backend → Render

- Database → MongoDB Atlas

## 📄 License

This project is open-source and available under the **MIT License**.

---

##  Contributions

Contributions, issues, and feature requests are welcome.  
Feel free to fork the repository and submit a pull request.

---

### ⭐ If you like this project, consider giving it a star!

