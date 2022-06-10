import { AxiosConfig } from './AxiosConfig';

export const UserApi = {
  addPost: (body) => {
    return AxiosConfig.post('/users/posts', body);
  },
  postSaved: () => {
    return AxiosConfig.get('/users/posts/saved');
  },
  archivePost: ({id, body}) => {
    return AxiosConfig.post(`/users/posts/${id}/archive`, body);
  },
};
