export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  url: env("PUBLIC_URL", "https://portfolio-f9nx.onrender.com"), // important for admin assets
 // proxy: true, // trust Render's HTTPS proxy

  app: {
    keys: env.array("APP_KEYS"),
  },

  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    cookies: {
      secure: true, // secure cookies are fine when behind HTTPS
    },
  },
});
