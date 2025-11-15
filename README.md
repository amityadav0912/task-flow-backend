# Task Flow Backend

A **NestJS-based Task Management API** with MongoDB, JWT authentication, and TypeORM.  
This backend allows you to manage tasks, teams, and team members with proper authentication.

---

## Features

- Create, update, and delete tasks
- Assign tasks to team members
- Manage teams and team members
- Fetch all tasks, or tasks assigned to a specific member
- Update task status and other properties
- JWT-based authentication for all endpoints
- Type-safe and well-structured code using TypeScript

---

## Tech Stack

- **Backend:** NestJS  
- **Database:** MongoDB (via TypeORM)  
- **Authentication:** JWT (Bearer Token)  
- **Validation:** class-validator & class-transformer  
- **Environment Variables:** dotenv  

---

## Getting Started

### STEPS TO RUN

```bash
git clone <repo-url>
cd task-flow-backend


# 1. Install Dependencies
npm install


# MongoDB connection string
MONGO_URI=mongodb://localhost:27017/task-flow

# JWT authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s

#The API will be available at:
npm run start:dev

#The API will be available at:
http://localhost:3000