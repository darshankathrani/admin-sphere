require("dotenv").config();
const mongoose = require("mongoose");

let cachedConnection = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (cachedConnection) {
    return cachedConnection;
  }

  console.log("Starting new MongoDB connection...");
  cachedConnection = mongoose.connect(process.env.MONGO_URI, {
    bufferCommands: false,
  });

  try {
    await cachedConnection;
    console.log("MongoDB connected successfully");
    return cachedConnection;
  } catch (err) {
    cachedConnection = null; // Clear cache on failure so we can retry
    console.error("MongoDB Connection Error:", err.message);
    throw err;
  }
};

module.exports = connectDB;
