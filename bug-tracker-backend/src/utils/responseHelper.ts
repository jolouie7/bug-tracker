import { Response } from 'express';
import { ApiResponse } from '../types';

export const sendSuccess = <T>(
  res: Response,
  data: T,
  status: number = 200,
  metadata?: Record<string, any>
) => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    metadata: {
      version: res.getHeader('API-Version') as string || 'v1',
      timestamp: new Date().toISOString(),
      ...metadata
    }
  };
  
  return res.status(status).json(response);
};

export const sendError = (
  res: Response,
  message: string,
  status: number = 500,
  code?: string,
  details?: any
) => {
  const response: ApiResponse = {
    success: false,
    error: {
      message,
      status,
      code,
      details
    },
    metadata: {
      version: res.getHeader('API-Version') as string || 'v1',
      timestamp: new Date().toISOString()
    }
  };
  
  return res.status(status).json(response);
};