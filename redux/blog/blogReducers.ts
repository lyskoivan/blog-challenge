import { combineReducers } from 'redux';

import * as types from './blogTypes';

type BlogReducerTypes = types.CreatePostActionTypes | types.GetPostsActionTypes;

const postsReducer = (state = [], action: BlogReducerTypes): Array<types.Post> => {
    switch (action.type) {
        case types.GET_POSTS_SUCCESS:
            return action.payload.posts;

        case types.CREATE_POST_SUCCESS:
            return [action.payload.post, ...state];

        default:
            return state;
    }
};

const currentPostReducer = (state = null, action: types.GetPostActionTypes): types.Post => {
    switch (action.type) {
        case types.GET_POST_SUCCESS:
            return action.payload.post;

        default:
            return state;
    }
};

const errorReducer = (state = null, action: BlogReducerTypes | types.GetPostActionTypes): types.Error => {
    switch (action.type) {
        case types.GET_POSTS_START:
        case types.CREATE_POST_START:
        case types.GET_POST_START:
            return null;

        case types.GET_POSTS_ERROR:
        case types.CREATE_POST_ERROR:
        case types.GET_POST_ERROR:
            return action.payload.error;

        default:
            return state;
    }
};

const reducer = combineReducers({ posts: postsReducer, error: errorReducer, currentPost: currentPostReducer });

export default reducer;
