const { betterAuth } = require("better-auth");
const { Pool } = require("pg");

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const auth = betterAuth({
  database: {
    provider: "postgres", // or "mysql", "sqlite"
    url: process.env.DATABASE_URL,
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  
  // Email and password (optional)
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  
  // Social providers
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectURI: `${process.env.BETTER_AUTH_URL}/api/auth/callback/google`,
    },
  },
  
  // Session configuration
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Update session every 24 hours
  },

  // Callbacks
  callbacks: {
    async signIn({ user, account }) {
      console.log(`User ${user.email} signed in with ${account.provider}`);
      return true;
    },
  },
});

module.exports = { auth, pool };