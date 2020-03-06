import React from 'react';

import * as types from '../../redux/blog/blogTypes';

import { PostWrapper, PostBody } from './Post.styled';

interface Props {
    post: types.Post;
}

const Post = ({ post }: Props): JSX.Element => {
    return (
        <PostWrapper>
            <h2>{post.title}</h2>
            <PostBody>{post.body}</PostBody>
        </PostWrapper>
    );
};

export default Post;
