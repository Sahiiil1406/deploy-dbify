const express = require("express");
const { auth } = require("../config/auth");
const { requireAuth } = require("../middleware/authMiddleware");

const router = express.Router();

// Mount Better Auth handlers
// This handles all auth endpoints automatically
router.all("/*", async (req, res) => {
  return auth.handler(req, res);
});

module.exports = router;