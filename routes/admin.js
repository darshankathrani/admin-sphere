const express = require("express");
const router = express.Router();
const { handleAdminLogIn, handleAdminLogOut } = require("../controllers/admin");
const isAdmin = require("../middleware/isAdmin");
const loginLimiter = require("../middleware/loginLimiter");
// Models
const Admin = require("../models/admin");
const Message = require("../models/message");

/**
 * Admin Routes
 * Handles admin interaction including login, dashboard, and logout.
 */

// Render Login Page
router.get("/login", (req, res) => {
  return res.render("login");
});

// Process Login
// Uses loginLimiter middleware to prevent brute force attacks
router.post("/login", loginLimiter, handleAdminLogIn);

// Admin Dashboard
// Protected by isAdmin middleware
router.get("/dashboard", isAdmin, async (req, res) => {
  const admins = await Admin.find();
  const messages = await Message.find();
  return res.render("adminDashboard", { admins, messages });
});

// Logout
router.post("/logout", handleAdminLogOut);

module.exports = router;
