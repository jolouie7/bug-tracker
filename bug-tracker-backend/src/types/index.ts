import { Request } from 'express';

export interface VersionedRequest extends Request {
  apiVersion?: string;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  metadata?: {
    version: string;
    timestamp: string;
    [key: string]: any;
  };
}