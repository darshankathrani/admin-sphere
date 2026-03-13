/**
 * isAdmin Middleware
 * Ensures the user is authenticated as an admin.
 * Also prevents caching of protected pages.
 */
module.exports = (req, res, next) => {
  // Prevent caching of protected routes
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0"
  );

  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Surrogate-Control", "no-store");

  // Check if admin session exists
  if (req.session && req.session.adminId) {
    return next();
  }

  // Redirect to login if not authenticated
  return res.redirect("/admin/login");
};
