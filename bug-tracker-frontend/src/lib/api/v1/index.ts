export * from './bugs';
export * from './health';

// Re-export all API modules for easy access
import { bugsApi } from './bugs';
import { healthApi } from './health';

export const api = {
  bugs: bugsApi,
  health: healthApi,
  // Future APIs
  // users: usersApi,
  // projects: projectsApi,
  // teams: teamsApi,
};