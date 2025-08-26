# SprintSync FE ⚡️
React + Redux + React-Bootstrap frontend for the GenAILabs coding challenge

# Overview 📗
This repository contains the frontend for the SprintSync challenge. It’s a React app created with **Create React App (CRA)**, styled with **React-Bootstrap**, and powered by a **Redux Toolkit** store for predictable state management.

The app provides a lightweight UI for authentication, task management, and integration with the backend API. It’s built for rapid iteration, clarity, and easy deployment to **AWS Amplify**.

# Data 🗂️
The frontend interacts with a Django REST Framework backend through REST APIs:
- Local: `http://localhost:8000/api/`
- Production: configure via `.env` → `REACT_APP_API_URL=https://your-backend.com/api/`

# Product 📦
Core features:
- User login (JWT support)  
- Task list with inline status updates (ToDo / InProgress / Done)  
- Create/Edit/Delete tasks via modal  
- “AI Suggest” button placeholder for backend integration  
- Responsive layout built with React-Bootstrap  

# Implementation ⚙️
Tech stack:
- **React** (CRA scaffolding)  
- **Redux Toolkit** for global state  
- **React-Bootstrap** for styling and components  
- **Axios** for API requests  

## Local Setup
```bash
# scaffold app
npx create-react-app sprintsync-fe
cd sprintsync-fe

# add dependencies
npm install react-redux @reduxjs/toolkit axios react-bootstrap bootstrap
```