import { AxiosConfig } from './AxiosConfig';

export const PostApi = {
  getAllPost: ({ pageParam = 1 }) => {
    return AxiosConfig.get(`/posts/all?order=desc&limit=4&page=${pageParam}`);
  },
  getPostsBySlug: (slug) => {
    return AxiosConfig.get(`/posts/${slug}`);
  },
  likePosts: (id) => {
    return AxiosConfig.post(`/posts/${id}/like`);
  },
  unlikePosts: (id) => {
    return AxiosConfig.post(`/posts/${id}/unlike`);
  },
};
