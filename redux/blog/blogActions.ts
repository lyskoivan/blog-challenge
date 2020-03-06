import * as types from './blogTypes';

// Create post

export const createPostStart = (): types.CreatePostActionTypes => ({
    type: types.CREATE_POST_START,
});

export const createPostSuccess = (post: types.CreatePost): types.CreatePostActionTypes => ({
    type: types.CREATE_POST_SUCCESS,
    payload: { post },
});

export const createPostError = (error): types.CreatePostActionTypes => ({
    type: types.CREATE_POST_ERROR,
    payload: { error },
});

// Get posts

export const getPostsStart = (): types.GetPostsActionTypes => ({
    type: types.GET_POSTS_START,
});

export const getPostsSuccess = (posts: Array<types.Post>): types.GetPostsActionTypes => ({
    type: types.GET_POSTS_SUCCESS,
    payload: { posts },
});

export const getPostsError = (error): types.GetPostsActionTypes => ({
    type: types.GET_POSTS_ERROR,
    payload: { error },
});

// Get post

export const getPostStart = (): types.GetPostActionTypes => ({
    type: types.GET_POST_START,
});

export const getPostSuccess = (post: types.Post): types.GetPostActionTypes => ({
    type: types.GET_POST_SUCCESS,
    payload: { post },
});

export const getPostError = (error): types.GetPostActionTypes => ({
    type: types.GET_POST_ERROR,
    payload: { error },
});
