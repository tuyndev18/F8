import { AxiosConfig } from './AxiosConfig';

export const UserApi = {
  addPost: (body) => {
    return AxiosConfig.post('/users/posts', body);
  },
  postSaved: () => {
    return AxiosConfig.get('/users/posts/saved');
  },
  savePost: (id) => {
    return AxiosConfig.post(`/users/posts/${id}/save`);
  },
  unsavePost: (id) => {
    return AxiosConfig.post(`/users/posts/${id}/unsave`);
  },
};
