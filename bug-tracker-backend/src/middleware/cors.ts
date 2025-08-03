import cors from 'cors';

const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'];

export const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'API-Version', 'Accept-Version'],
  exposedHeaders: ['API-Version', 'Deprecation', 'Sunset', 'Link']
};