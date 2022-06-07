import { AxiosConfig } from './AxiosConfig';

export const AuthApi = {
  login: (body) => {
    return AxiosConfig.post('/auth/login', body);
  },
  logout: () => {
    return AxiosConfig.post('/auth/log_out');
  },
  register: (body) => {
    return AxiosConfig.post('/auth/register', body);
  },
};
