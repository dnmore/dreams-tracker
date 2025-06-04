# 🌙 Dreamy - Dreams Tracker

A full-stack MERN (MongoDB, Express, React, Node.js) application that lets users **create, read, update, and delete dreams**. The app also offers search and filtering functionality, light / dark mode, and real-time feedback with toast notifications.

---

## ✨ Features

- ✅ **CRUD operations** for managing dreams
- 🔍 **Search/filter dreams** by keyword
- 🌗 **Light/Dark mode toggle** using Chakra UI
- 🔔 **Toast messages** for form validation and CRUD operation feedback
- ⚛️ Built with **React + React Router**
- 🎨 Styled using **Chakra UI**
- 💾 State management with **Zustand**
- 🛠 Express.js backend API with **MongoDB/Mongoose** for data storage

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js 
- MongoDB Atlas account or local MongoDB instance

---

### Getting Started

Clone the repository and install the dependencies:

```bash

git clone https://github.com/dnmore/dreams-tracker.git
cd dreams-tracker
npm install

cd client
npm install

```

Create a .env file in the root:

```env

MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development

```

Run the client and the server separately in development

```bash

cd server
npm run dev

cd client
npm run dev

```

## License 📄

This project is licensed under the MIT License.
