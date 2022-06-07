import { AxiosConfig } from './AxiosConfig';

export const NotificationApi = {
  getAll: () => {
    return AxiosConfig.get('/notifications');
  },
};
