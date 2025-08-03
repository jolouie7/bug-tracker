import apiClient from '../client';

export interface Bug {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: Date;
  updatedAt: Date;
}

export interface BugsResponse {
  bugs: Bug[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface CreateBugDto {
  title: string;
  description: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
}

export interface UpdateBugDto {
  title?: string;
  description?: string;
  status?: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority?: 'low' | 'medium' | 'high' | 'critical';
}

export const bugsApi = {
  getAll: async (params?: {
    page?: number;
    limit?: number;
    status?: string;
    priority?: string;
  }): Promise<BugsResponse> => {
    return apiClient.get<BugsResponse>('/bugs', params);
  },

  getById: async (id: number): Promise<Bug> => {
    return apiClient.get<Bug>(`/bugs/${id}`);
  },

  create: async (data: CreateBugDto): Promise<Bug> => {
    return apiClient.post<Bug>('/bugs', data);
  },

  update: async (id: number, data: UpdateBugDto): Promise<Bug> => {
    return apiClient.patch<Bug>(`/bugs/${id}`, data);
  },

  delete: async (id: number): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>(`/bugs/${id}`);
  },
};