const express = require("express");
const router = express.Router();

const {
  handlePostContact,
  handleDeleteMessage,
} = require("../controllers/message");

/**
 * Message Routes
 * Handles user contact form submission and admin message management.
 */

// Submit Contact Form
router.post("/user", handlePostContact);

// Delete Message (Admin)
router.post("/user/delete/:id", handleDeleteMessage);

module.exports = router;
