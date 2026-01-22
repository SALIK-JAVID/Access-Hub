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
- Admin panel for user management
- Search users by name or email
- Intersection observer
- Lazy Loading & Infinite Scroll (Frontend) 

---
##  New Feature: Skeleton Loader + Infinite Scroll (No Libraries)

Access Hub now includes a smooth, modern **infinite scroll** experience for the avatar grid along with a **skeleton loader** (built without any external UI libraries).

### What it does
- Loads users in **batches of 10** (`LOAD_COUNT = 10`)
- Uses **IntersectionObserver** to detect when you reach the bottom
- Simulates an API call with a short delay to mimic real network behavior
- Shows **skeleton placeholders** while the next batch is being fetched
- Appends new users to the existing list (no page refresh)

###  How it works (High Level)
1. The Dashboard starts with an empty `users` array.
2. `fetchUsers()` generates the next 10 users using the current `users.length` as a cursor.
3. While fetching, `isLoading` becomes `true`, and the UI renders `LOAD_COUNT` skeleton cards.
4. When data arrives, skeletons disappear and new avatars are appended.
5. IntersectionObserver triggers the next fetch automatically as you scroll.

###  Key Implementation Notes
- **No preloaded dataset** (no `TOTAL_USERS` / no `MAX_USERS`)
- A **loading lock** prevents duplicate fetches:
  - The fetch function exits early if `isLoading === true`
- Skeleton loader uses simple Tailwind + `animate-pulse`:
  - No external UI dependencies

###  UX Result
Users see a responsive avatar grid that keeps loading more content as they scroll, with clean skeleton placeholders during fetch time — similar to real-world apps like Instagram/LinkedIn feeds.


## 🧭 Authentication Flow

1. User signs up → data stored securely in MongoDB
2. User logs in → JWT token generated
3. Token stored on client
4. Protected routes validate token
5. User redirected to intended route after login
6. admin can search the user by email or name

This behavior closely mirrors real-world authentication systems used in production apps.

⚠️ Note:
The /admin route is currently not protected.
It is assumed that only authorized administrators will access this panel.
(This is a deliberate design choice for learning and demonstration.)

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








---
## Admin Panel Features
```
/admin

```
⚠️ IMPORTANT NOTE

The /admin route is NOT protected intentionally.
It is assumed that only an authorized administrator will access this route.
---
## Admin Capabilities:
- View all registered users
- Block users
- Unblock users
- See user status (Active / Blocked)
- Frontend pagination (2 users per page)
---
## Bloacked User Behaviour:
- Blocked users:
- ❌ Cannot log in
- ❌ Cannot re-register using the same email
- Status is stored in the database
- Checked during authentication
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
