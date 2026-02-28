# DevTinder — Tinder for Developers

> A full-stack matchmaking platform that helps developers discover and connect with each other, inspired by interaction model of Tinder. Built with **MERN Stack** and **Razorpay** payment integration.

---

## Screenshots of some sections

![Login page](screenshots/1.png)
Login page

![Home page](screenshots/2.png)
Home page

![Edit profile page](screenshots/3.png)
Edit profile page

![Update password page](screenshots/4.png)
Update password page

## 📌 Overview

DevTinder is a social networking web application where developers can:

- **Browse** profiles of other developers in a card-based feed
- Express interest or pass on a profile
- **Accept or reject** incoming connection requests
- **Build a network** of developer connections
- **Edit** their own profile with a live preview
- **Upgrade** to a premium membership (Silver / Gold) via Razorpay payments

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB instance (local or Atlas)
- Razorpay account (for payment features)

### Backend
```bash
cd backend
npm install
# Create .env with: MONGODB_CONNECTION_STRING, SECRET_KEY, FRONTEND_URL, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET
npm run dev   # starts with nodemon on port 3000
```

### Frontend
```bash
cd frontend
npm install
# Create .env with: VITE_BASE_URL (backend URL)
npm run dev   # starts Vite dev server
```