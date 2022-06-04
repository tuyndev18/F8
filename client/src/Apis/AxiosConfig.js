import axios from 'axios';
export const AxiosConfig = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});

// Add a request interceptor
AxiosConfig.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem('current_user'))?.access_token || 'token';
    config.headers['authorization'] = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
AxiosConfig.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    if (error.response.status === 401) {
      const { access_token } = await AxiosConfig.post('/auth/refresh');
      const current_user = JSON.parse(localStorage.getItem('current_user'));
      localStorage.setItem('current_user', JSON.stringify({ ...current_user, access_token }));
      return AxiosConfig(error.config);
    }
    return Promise.reject(error);
  },
);
