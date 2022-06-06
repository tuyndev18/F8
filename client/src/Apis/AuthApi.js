import { AxiosConfig } from './AxiosConfig';

export const AuthApi = {
  login: async (body) => {
    return AxiosConfig.post('/auth/login', body);
  },
  logout: async () => {
    return AxiosConfig.post('/auth/log_out');
  },
  register: async (body) => {
    return AxiosConfig.post('/auth/register', body);
  },
};
