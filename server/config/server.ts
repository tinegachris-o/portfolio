export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    cookies: {
      secure: true, // 🩵 Fixes "Cannot send secure cookie over unencrypted connection"
    },
  },
});
