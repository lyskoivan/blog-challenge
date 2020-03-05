import { Post, BlogState } from './blogTypes';

export const getPosts = (store: BlogState): Array<Post> => store.blog.posts;
