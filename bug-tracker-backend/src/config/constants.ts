export const API_VERSIONS = {
  V1: 'v1',
  V2: 'v2' // Future version
} as const;

export const DEFAULT_API_VERSION = API_VERSIONS.V1;

export const API_PREFIX = '/api';

export const DEPRECATION_HEADERS = {
  SUNSET: 'Sunset',
  DEPRECATION: 'Deprecation',
  LINK: 'Link'
};