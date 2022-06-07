import { AxiosConfig } from './AxiosConfig';

export const UserApi = {
  addPost: (body) => {
    return AxiosConfig.post('/users/posts', body);
  },
};
