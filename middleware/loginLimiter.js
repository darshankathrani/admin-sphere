const rateLimit = require("express-rate-limit");

/**
 * Login Rate Limiter Middleware
 * Limits the number of login attempts to prevent brute force attacks.
 */

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // Limit each IP to 5 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    // Return friendly error message on limit exceeded
    return res
      .status(429)
      .render("login", { error: "Too many login attempts. Try again later." });
  },
});
