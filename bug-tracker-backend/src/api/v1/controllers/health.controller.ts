import { Request, Response } from 'express';
import { sendSuccess } from '../../../utils/responseHelper';

export const healthCheck = (req: Request, res: Response) => {
  sendSuccess(res, {
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
};

export const getApiInfo = (req: Request, res: Response) => {
  sendSuccess(res, {
    version: 'v1',
    endpoints: {
      health: '/api/v1/health',
      info: '/api/v1/info',
      bugs: '/api/v1/bugs',
      users: '/api/v1/users'
    },
    documentation: '/api/v1/docs'
  });
};