require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");
const sessionMiddleware = require("./config/session");

const adminRoute = require("./routes/admin");
const messageRoute = require("./routes/message");

// Trust proxy (Required for correct rate-limit IP handling)
app.set("trust proxy", 1);

// Static files + View engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Core middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(helmet());

// Optional global rate limiter (light protection)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  })
);

// DB + Session
connectDB();
app.use(sessionMiddleware);

// Routes
app.get("/", (req, res) => res.render("home"));
app.use("/admin", adminRoute);
app.use("/contact", messageRoute);

// 404
app.use((req, res) => res.status(404).render("404"));

// 500 (Global Error Handler)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500");
});

// Start server
app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on http://localhost:3000")
);
