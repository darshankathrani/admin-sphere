require("dotenv").config();
const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false, // Disable buffering for faster fail reporting on serverless
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    throw err;
  }
};

module.exports = connectDB;
