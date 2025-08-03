import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { corsOptions } from './middleware/cors';
import { errorHandler } from './middleware/errorHandler';
import { versionMiddleware } from './middleware/versioning';
import { API_PREFIX, API_VERSIONS } from './config/constants';
import v1Routes from './api/v1/routes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check at root
app.get('/', (req, res) => {
  res.json({
    message: 'Bug Tracker API',
    version: process.env.API_VERSION || 'v1',
    docs: `${API_PREFIX}/v1/info`
  });
});

// API versioning middleware for all /api routes
app.use(`${API_PREFIX}/:version`, versionMiddleware);

// Mount versioned routes
app.use(`${API_PREFIX}/${API_VERSIONS.V1}`, v1Routes);

// Future versions
// app.use(`${API_PREFIX}/${API_VERSIONS.V2}`, v2Routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Route not found',
      status: 404,
      code: 'ROUTE_NOT_FOUND'
    }
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}${API_PREFIX}/v1/info`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});