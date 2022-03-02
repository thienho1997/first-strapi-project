module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1556719f03b8167035fed0b6e2a5c57f'),
  },
});
