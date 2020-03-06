import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

export const getAllPosts = (): any => axios.get('posts');

export const createPost = (post): any => axios.post('posts', post);

export const getPostById = (postId): any => axios.get(`posts/${postId}?_embed=comments`);
