import axios from 'axios';
export const AxiosConfig = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});

// Add a request interceptor
AxiosConfig.interceptors.request.use(
  function (config) {
    if (config.url.includes('login')) {
      return config;
    }
    const token = localStorage.getItem('access_token');
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
    return response.data?.data;
  },
  async function (error) {
    const config = error.config;
    if (
      error.response?.status === 401 &&
      ['Unauthenticated User', 'Refresh token has expired'].includes(error.response.data.message)
    ) {
      window.location.assign('/auth/login');
      localStorage.removeItem('current_user');
    }

    if (error.response?.status === 401 && error.response.data.message === 'Authorization not valid') {
      try {
        const { access_token } = await AxiosConfig.post('/auth/refresh');
        localStorage.setItem('access_token', access_token);
        return AxiosConfig(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error.response.data.message);
  },
);
