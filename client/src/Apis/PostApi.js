import { AxiosConfig } from './AxiosConfig';

export const PostApi = {
  getAllPost: ({ pageParam = 1 }) => {
    return AxiosConfig.get(`/posts/all?order=desc&limit=4&page=${pageParam}`);
  },
  getPostsBySlug: (slug) => {
    return AxiosConfig.get(`/posts/${slug}`);
  },
  reactionPosts: ({ id, body }) => {
    return AxiosConfig.post(`/posts/${id}/reactions`, body);
  },
  getComments: (id) => {
    return AxiosConfig.get(`/posts/${id}/comments`);
  },
  addComment: ({ id, content }) => {
    return AxiosConfig.post(`/posts/${id}/comments`, { content });
  },
  reactionComments: ({ id, body }) => {
    return AxiosConfig.post(`/posts/comments/${id}/reactions`, body);
  },
};
