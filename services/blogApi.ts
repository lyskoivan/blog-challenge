import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

export const getAllPosts = (): any => axios.get('posts');

export const createPost = (post): any => axios.post('posts', post);

export const getPostById = async postId => {
    try {
        const post = await axios.get(`posts/${postId}?_embed=comments`);
        return post;
    } catch (error) {
        throw new Error(error);
    }
};
