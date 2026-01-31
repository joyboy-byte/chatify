# 💬 Chatify

A real-time full-stack chat application built with the MERN stack.

🔗 **Live Demo:**  
https://chatify-production-aec2.up.railway.app

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 💬 Real-time messaging (Socket.io)
- 🖼 Image upload (Cloudinary)
- 📧 Email verification (Resend)
- 🛡 API protection (Arcjet)
- 📱 Responsive UI
- 🌍 Deployed on Railway

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- DaisyUI
- Zustand
- Axios
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Socket.io
- JWT Authentication
- Cloudinary
- Resend

### Deployment
- Railway (Full Stack Hosting)
- MongoDB Atlas (Database)

---

## ⚙️ Installation (Local Setup)

1️⃣ Clone Repository

2️⃣ Install Dependencies
npm run build

3️⃣ Setup Environment Variables

Create .env inside backend/ folder:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173

4️⃣ Start Development
cd backend
npm run dev

```bash
git clone https://github.com/joyboy-byte/chatify.git
cd chatify
