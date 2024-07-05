# Referral System - Learn & Earn

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
   - [Database Setup](#database-setup)
5. [API Documentation](#api-documentation)
6. [Environment Variables](#environment-variables)
7. [Deployed URLs](#deployment-urls)

## Introduction

The Referral System - Learn & Earn is a web application that allows users to refer friends to educational programs and earn rewards. This project consists of a React frontend and an Express.js backend, using MySQL as the database.

## Features

- User-friendly landing page with program information
- Referral form for users to refer friends
- Email notifications for successful referrals
- Reward tracking for referrers
- Responsive design for mobile and desktop
- Admin dashboard for managing referrals and rewards (future feature)

## Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Axios for API calls
- React Hook Form for form handling
- Zod for form validation

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- MySQL database
- Nodemailer for email notifications
- Zod for input validation

### Development Tools
- Vite for frontend development
- ESLint and Prettier for code linting and formatting
- Jest for testing (future implementation)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MySQL database

### Backend Setup

1. Clone the repository:
   ```bash
    git clone https://github.com/shubhsardana29/Accredian.git
    cd Accredian-backend-task
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Set up environment variables:
  - Copy the `.env.sample` file to `.env`
  - Update the variables in `.env` with your configuration

4. Set up the database:
   ```bash
    npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
    npm run dev
   ```
The backend server will start on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
    cd ../Accredian-frontend-task
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Start the development server:
   ```bash
    npm run dev
   ```
The frontend development server will start on `http://localhost:5173`.

### Database Setup

1. Create a MySQL database for the project
2. Update the `DATABASE_URL` in the backend `.env` file with your database credentials
3. Run Prisma migrations:
   ```bash
   cd Accredian-backend-task
   npx prisma migrate dev
   ```
## API Documentation

### Referral Submission
- **Endpoint**: `POST /api/referrals/submit`
- **Description**: Submit a new referral
- **Request Body**:
  ```json
  {
    "referrerName": "string",
    "referrerEmail": "string",
    "refereeName": "string",
    "refereeEmail": "string"
  }
  ```
  - response:
    - Success (201 Created):
      ```json
      {
        "id": "number",
        "referrerName": "string",
        "referrerEmail": "string",
        "refereeName": "string",
        "refereeEmail": "string",
        "createdAt": "string (ISO date)"
      }
      ```
   - Error (400 Bad Request):
     ```json
          {
          "errors": [
            {
              "field": "string",
              "message": "string"
            }
          ]
        }
      ```
## Environment Variables

### Backend (.env.sample)
```
DATABASE_URL="mysql://user:password@localhost:3306/referral_db"
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
CLIENT_ID=your-google-oauth-client-id
CLIENT_SECRET=your-google-oauth-client-secret
REFRESH_TOKEN=your-google-oauth-refresh-token
```
## Deployed URLs
- Backend: https://accredian-nphg.onrender.com
- Frontend: https://accredian.vercel.app
