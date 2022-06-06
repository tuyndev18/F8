import { AxiosConfig } from './AxiosConfig';

export const NotificationApi = {
  getAll: async () => {
    return AxiosConfig.get('/notifications');
  },
};
