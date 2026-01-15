<p align="center">
  <img src="./cover.png" alt="Access Hub Cover" width="100%" />
</p>

# Access Hub - Authentication System

**Access Hub** is a modern, secure authentication system built using **React** and a **Node.js backend**, designed to demonstrate real-world authentication flows such as protected routes, login redirection, and local storage handling.

This project focuses on **clean architecture**, **user experience**, and **scalable authentication logic**, making it suitable for production use and a strong addition to a developer portfolio.

---

## Live Demo

- **Frontend (Vercel):** https://access-hub-five.vercel.app
- **Backend (Render):** https://access-hub-yc3e.onrender.com

## Features

### Implemented

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

1. User signs up → data stored securely in MongoDB
2. User logs in → JWT token generated
3. Token stored on client
4. Protected routes validate token
5. User redirected to intended route after login

This behavior closely mirrors real-world authentication systems used in production apps.

---

## 🛠 Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt.js
- CORS

---

### Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## File structure

AccessHub/
│
├── client/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Admin.jsx
│   │   │
│   │   ├── components/
│   │   │   └── UserTable.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   └── adminApi.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── vite.config.js
│
├── server/                  # Backend (Node + Express)
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── adminController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── server.js
│   └── .env
│
└── README.md






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

> ⚠️ Never commit `.env` files to GitHub

## 🛠️ Setup Instructions (Local)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SALIK-JAVID/Access-Hub.git
cd Access-Hub
For backend:
cd server
npm install
npm start
For Frontend:
cd client
npm install
npm run dev
```

## 📄 License

This project is open-source and available under the **MIT License**.

---

## Contributions

Contributions, issues, and feature requests are welcome.  
Feel free to fork the repository and submit a pull request.

---

### ⭐ If you like this project, consider giving it a star!
