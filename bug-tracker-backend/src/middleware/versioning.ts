import { Request, Response, NextFunction } from 'express';
import { VersionedRequest } from '../types';
import { API_VERSIONS, DEFAULT_API_VERSION, DEPRECATION_HEADERS } from '../config/constants';

export const versionMiddleware = (req: VersionedRequest, res: Response, next: NextFunction) => {
  const versionFromPath = req.params.version;
  const versionFromHeader = req.headers['accept-version'] || req.headers['api-version'];
  
  const version = versionFromPath || versionFromHeader || DEFAULT_API_VERSION;
  
  if (!Object.values(API_VERSIONS).includes(version as any)) {
    return res.status(400).json({
      success: false,
      error: {
        message: `API version ${version} is not supported`,
        status: 400,
        code: 'INVALID_API_VERSION'
      }
    });
  }
  
  req.apiVersion = version as string;
  
  // Add version to response headers
  res.setHeader('API-Version', version);
  
  // Add deprecation headers for old versions
  if (version === API_VERSIONS.V1) {
    // Example: V1 will be deprecated in the future
    // res.setHeader(DEPRECATION_HEADERS.DEPRECATION, 'true');
    // res.setHeader(DEPRECATION_HEADERS.SUNSET, new Date('2025-12-31').toUTCString());
    // res.setHeader(DEPRECATION_HEADERS.LINK, `</api/${API_VERSIONS.V2}>; rel="successor-version"`);
  }
  
  next();
};