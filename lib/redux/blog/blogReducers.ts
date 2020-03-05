import { combineReducers } from 'redux';

import * as types from './blogTypes';

const postsReducer = (state = [], action) => {};

const errorReducer = (state = null, action) => {};

const reducer = combineReducers({ posts: postsReducer, error: errorReducer });

export default reducer;
