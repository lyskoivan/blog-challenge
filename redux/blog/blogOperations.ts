import * as actions from './blogActions';
import * as types from './blogTypes';
import * as API from '../../services/blogApi';

export const getPosts = () => (dispatch): void => {
    dispatch(actions.getPostsStart());

    API.getAllPosts()
        .then(res => dispatch(actions.getPostsSuccess(res.data)))
        .catch(err => dispatch(actions.getPostsError(err)));
};

export const createPost = (post: types.CreatePost) => (dispatch): void => {
    dispatch(actions.createPostStart());

    API.createPost(post)
        .then(res => dispatch(actions.createPostSuccess(res.data)))
        .catch(err => dispatch(actions.createPostError(err)));
};

export const getPostById = (postId: string | Array<string>) => (dispatch): void => {
    dispatch(actions.getPostStart());

    API.getPostById(postId)
        .then(res => dispatch(actions.getPostSuccess(res.data)))
        .catch(err => dispatch(actions.getPostError(err)));
};
