import { Post, BlogState } from './blogTypes';

export const getPosts = (store: BlogState): Array<Post> => store.blog.posts;
export const getPost = (store: BlogState): Post => store.blog.currentPost;
