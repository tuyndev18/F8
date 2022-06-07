import { AxiosConfig } from './AxiosConfig';

export const PostApi = {
  getAllPost: () => {
    return AxiosConfig.get('/posts/all?order=desc');
  },
  getPostsBySlug: (slug) => {
    return AxiosConfig.get(`/posts/${slug}`);
  },
};
