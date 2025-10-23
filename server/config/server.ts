export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
      sessions: {
        maxSessionLifespan: 1000 * 24 * 60 * 60 * 1000, // 1000 days (in milliseconds)
        maxRefreshTokenLifespan: 1000 * 24 * 60 * 60 * 1000, // 1000 days
      },
    },
    cookies: {
      secure: true, // ✅ we want secure cookies in production
    },
  },
  settings: {
    proxy: true, // 🧩 tells Strapi to trust Render's HTTPS proxy
  },
});
