import { combineReducers } from 'redux';

import blogReducer from './blog/blogReducers';

export default combineReducers({ blog: blogReducer });
