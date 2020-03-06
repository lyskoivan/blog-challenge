import React from 'react';

import * as types from '../../redux/blog/blogTypes';

interface Props {
    post: types.Post;
}

const Post = ({ post }: Props): JSX.Element => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
