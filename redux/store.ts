import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const initStore = (): any => {
    return createStore(rootReducer, enhancer);
};
