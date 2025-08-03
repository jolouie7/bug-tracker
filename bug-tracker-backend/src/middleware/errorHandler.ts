import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../types';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: ApiError = {
    message: 'Internal Server Error',
    status: 500
  };

  if (err instanceof AppError) {
    error = {
      message: err.message,
      status: err.statusCode,
      code: err.code,
      details: err.details
    };
  } else if (err instanceof Error) {
    error.message = err.message;
    
    // Handle common errors
    if (err.name === 'ValidationError') {
      error.status = 400;
      error.code = 'VALIDATION_ERROR';
    } else if (err.name === 'UnauthorizedError') {
      error.status = 401;
      error.code = 'UNAUTHORIZED';
    }
  }

  // Log error for debugging
  console.error('Error:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip
  });

  res.status(error.status).json({
    success: false,
    error,
    metadata: {
      version: req.headers['api-version'] || 'v1',
      timestamp: new Date().toISOString()
    }
  });
};