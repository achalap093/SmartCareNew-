# SmartCare - Project Contribution Guide

Welcome to the SmartCare Hospital Management System project!

## 📋 Project Overview

SmartCare is a full-stack MERN hospital management system with:
- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js, MongoDB
- **Authentication**: JWT-based with role-based access control

## 👥 Team & Module Assignments

| Module | Assigned To | GitHub Username |
|--------|-------------|-----------------|
| Patient Management | Achala Perera | @achalap093 |
| Doctor & Staff Management | Maneka | @Maneka-Dev |
| Appointment & Scheduling | Kaushi | @Kaushi@54321 |
| Billing & Payment | Rashmika | @rashmika19993 |
| Pharmacy & Medical Records | Heshi | @Heshyy@15022024 |

## 🏗️ Development Workflow

### 1. Getting Started

```bash
# Clone the repository
git clone https://github.com/achalap093/SmartCare.git
cd SmartCare

# Create your feature branch
git checkout -b feature/module-name

# Install dependencies
# Backend
cd server && npm install

# Frontend
cd ../client && npm install
```

### 2. Making Changes

```bash
# Create your branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature

# Make your changes and commit
git add .
git commit -m "Description of changes"

# Push to remote
git push origin feature/your-feature
```

### 3. Submitting a Pull Request

1. Push your branch to GitHub
2. Go to the repo on GitHub
3. Click "Compare & Pull Request"
4. Add description of changes
5. Request review from team members

## 📁 Project Structure

```
SmartCare/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components (by role)
│   │   ├── context/        # React context
│   │   ├── services/      # API services
│   │   └── ...
│   └── package.json
│
└── server/                 # Express Backend
    ├── src/
    │   ├── controllers/    # Route handlers
    │   ├── models/        # MongoDB models
    │   ├── services/      # Business logic
    │   ├── routes/        # API routes
    │   ├── middlewares/   # Custom middleware
    │   ├── validators/    # Input validation
    │   └── ...
    └── package.json
```

## 🔧 Running the Project

### Backend
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

### Frontend
```bash
cd client
npm run dev
# Client runs on http://localhost:5173
```

## 📝 Coding Standards

- Use meaningful variable and function names
- Add comments for complex logic
- Follow RESTful API conventions
- Use async/await for asynchronous operations
- Validate all user inputs

## 🔒 Git Config Setup

Each team member must configure their Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

This ensures commits are attributed to the correct person.

## 📞 Communication

- Use GitHub Issues for task tracking
- Create Pull Requests for code review
- Respond to review comments promptly

---

**Happy Coding! 🚀**