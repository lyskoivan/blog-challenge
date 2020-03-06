export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const GET_POST_START = 'GET_POST_START';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export interface Comments {
    id: number;
    postId: number;
    body: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    comments?: Array<Comments>;
}

export interface Error {
    message: string | null;
    name: string | null;
    stack: string | null;
    config: object | null;
}

export interface BlogState {
    blog: {
        posts: Array<Post>;
        error: Error | null;
        currentPost: Post;
    };
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
    payload: { error: Error };
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
    payload: { error: Error };
}

export type GetPostsActionTypes = GetPostsStartAction | GetPostsSuccessAction | GetPostsErrorAction;

// Get post

interface GetPostStartAction {
    type: typeof GET_POST_START;
}

interface GetPostSuccessAction {
    type: typeof GET_POST_SUCCESS;
    payload: { post: Post };
}

interface GetPostErrorAction {
    type: typeof GET_POST_ERROR;
    payload: { error: Error };
}

export type GetPostActionTypes = GetPostStartAction | GetPostSuccessAction | GetPostErrorAction;
