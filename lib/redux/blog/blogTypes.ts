export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface PostsState {
    posts: Array<Post>;
}

export interface ErrorState {
    error: any;
}

export interface CreatePost {
    title: string;
    body: string;
}

// Create post

interface CreatePostStartAction {
    type: typeof CREATE_POST_START;
}

interface CreatePostSuccessAction {
    type: typeof CREATE_POST_SUCCESS;
    payload: { post: CreatePost };
}

interface CreatePostErrorAction {
    type: typeof CREATE_POST_ERROR;
    payload: { error: any };
}

export type CreatePostActionTypes = CreatePostStartAction | CreatePostSuccessAction | CreatePostErrorAction;

// Get posts

interface GetPostsStartAction {
    type: typeof GET_POSTS_START;
}

interface GetPostsSuccessAction {
    type: typeof GET_POSTS_SUCCESS;
    payload: { posts: Array<Post> };
}

interface GetPostsErrorAction {
    type: typeof GET_POSTS_ERROR;
    payload: { error: any };
}

export type GetPostsActionTypes = GetPostsStartAction | GetPostsSuccessAction | GetPostsErrorAction;
