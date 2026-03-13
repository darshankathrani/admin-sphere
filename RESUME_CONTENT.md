# Business Website Project - Resume Content

## Project Description

**Business Website with Admin Dashboard** | Node.js, Express.js, MongoDB

A full-stack web application featuring a modern business landing page with integrated contact management system and secure admin dashboard. Built with RESTful architecture and comprehensive security measures.

---

## Key Features

- **Public Business Website**: Responsive landing page with hero section, services showcase, and contact form
- **Admin Authentication System**: Secure login with bcrypt password hashing and session management
- **Contact Form Management**: Customers can submit inquiries; admins can view and manage messages via dashboard
- **Security Implementation**: Rate limiting, Helmet.js for security headers, CORS configuration, and brute-force protection
- **Database Integration**: MongoDB with Mongoose ODM for data persistence and session storage

---

## Technical Stack

**Backend:**
- Node.js
- Express.js (v5.2.1)
- MongoDB with Mongoose
- Express-session with MongoDB session store
- Bcryptjs for password encryption

**Frontend:**
- EJS templating engine
- Responsive CSS with modern UI design
- Client-side form validation

**Security & Middleware:**
- Helmet.js for security headers
- Express-rate-limit for API protection
- Custom login rate limiter (5 attempts per 15 minutes)
- CORS configuration
- Session-based authentication
- Method-override for RESTful routes

---

## Technical Achievements

- Implemented secure authentication system with bcrypt password hashing and MongoDB-backed sessions
- Developed rate limiting middleware to prevent brute-force attacks on admin login
- Built RESTful API endpoints with proper error handling and validation
- Created admin dashboard with message management functionality
- Designed responsive front-end with modern UI/UX principles
- Configured security headers using Helmet.js and implemented CORS policies
- Structured MVC architecture with separation of concerns (routes, controllers, models, middleware)

---

## Project Structure Highlights

- **MVC Architecture**: Organized codebase with separate routes, controllers, models, and middleware
- **Security Middleware**: Custom authentication middleware and rate limiting for login endpoints
- **Error Handling**: Global error handler with custom 404 and 500 error pages
- **Database Models**: Mongoose schemas for Admin and Message entities with timestamps
- **Session Management**: Persistent sessions stored in MongoDB for scalability

---

## Short Description (for bullet points)

- **Full-stack business website** with Node.js/Express backend and EJS frontend, featuring admin dashboard, contact form management, and secure authentication with bcrypt and MongoDB sessions
- **Security-focused implementation** using Helmet.js, rate limiting, and brute-force protection for admin login endpoints
- **RESTful API** with MVC architecture, input validation, error handling, and MongoDB integration for data persistence

---

## Alternative One-Liner (for compact resumes)

**Business Website Application** | Node.js, Express.js, MongoDB | Built a full-stack web application with responsive landing page, secure admin authentication (bcrypt, sessions), contact form management dashboard, and comprehensive security features including rate limiting and Helmet.js

