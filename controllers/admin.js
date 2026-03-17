const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const connectDB = require("../config/db");

/**
 * Admin Controller
 * Handles admin authentication and session management.
 */

// Handle Admin Login
const handleAdminLogIn = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate input fields
    if (!name || !email) {
      return res.render("login", {
        error: "Email and name should not be empty",
      });
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return res.render("login", { error: "Invalid email format" });
    }

    // Ensure DB is connected before operation
    await connectDB();

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) return res.render("login", { error: "User not found" });

    // Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.render("login", { error: "Incorrect password" });

    // Set session data
    req.session.adminId = admin._id.toString();
    req.session.adminName = admin.name;

    // Save session and redirect to dashboard
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.render("login", { error: "Server error during login" });
      }
      return res.redirect("/admin/dashboard");
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.render("login", { error: "Server error" });
  }
};

// Handle Admin Logout
const handleAdminLogOut = (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("connect.sid");
    return res.redirect("/admin/login");
  });
};

module.exports = { handleAdminLogIn, handleAdminLogOut };
