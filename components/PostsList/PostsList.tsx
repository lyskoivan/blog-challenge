import React from 'react';

import { Post } from '../../redux/blog/blogTypes';

import PostsListItem from '../PostsListItem';

interface Props {
    posts: Array<Post>;
}

const PostsList = ({ posts = [] }: Props): JSX.Element => {
    return (
        <ul>
            {posts.map(post => (
                <PostsListItem key={post.id} post={post} />
            ))}
        </ul>
    );
};

export default PostsList;
