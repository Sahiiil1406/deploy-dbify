const { auth } = require("../config/auth");

// Middleware to verify session
async function requireAuth(req, res, next) {
  try {
    const sessionToken = req.cookies["better-auth.session_token"];
    
    if (!sessionToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No session token",
      });
    }

    // Verify session with Better Auth
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Invalid session",
      });
    }

    // Attach user to request
    req.user = session.user;
    req.session = session;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
}

// Optional: Role-based middleware
function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({
        success: false,
        message: "Forbidden - Insufficient permissions",
      });
    }
    next();
  };
}

module.exports = { requireAuth, requireRole };