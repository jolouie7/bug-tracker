import apiClient from '../client';

export interface HealthStatus {
  status: string;
  uptime: number;
  timestamp: string;
  environment: string;
}

export interface ApiInfo {
  version: string;
  endpoints: {
    health: string;
    info: string;
    bugs: string;
    users: string;
  };
  documentation: string;
}

export const healthApi = {
  check: async (): Promise<HealthStatus> => {
    return apiClient.get<HealthStatus>('/health');
  },

  info: async (): Promise<ApiInfo> => {
    return apiClient.get<ApiInfo>('/info');
  },
};