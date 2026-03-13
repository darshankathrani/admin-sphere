const Message = require("../models/message");
const connectDB = require("../config/db");

/**
 * Message Controller
 * Handles contact form submissions and message deletion.
 */

// Handle Contact Form Submission
const handlePostContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ msg: "Name and email should not be empty" });
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: "Invalid email" });
  }

  // Validate phone format if provided
  if (phone && !phoneRegex.test(phone)) {
    return res.status(400).json({ msg: "Invalid phone" });
  }

  try {
    // Ensure DB is connected before operation (important for serverless cold starts)
    await connectDB();

    // Create new message
    const data = await Message.create({ name, email, phone, message });
    return res.render("home", { data });
  } catch (err) {
    console.error("Error creating message:", err);
    return res.status(500).json({
      msg: "Database connection failed. Please try again later.",
      error: err.message,
    });
  }
};

// Handle Message Deletion
const handleDeleteMessage = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Message.findByIdAndDelete(id);
    return res.redirect("/admin/dashboard");
  } catch (err) {
    console.error("Delete message error:", err);
    next(err);
  }
};

module.exports = { handlePostContact, handleDeleteMessage };
