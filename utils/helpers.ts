export const isDev =
  process.env.NODE_ENV !== 'production' || // local dev
  process.env.VERCEL_ENV !== 'production'; // Vercel preview or dev
