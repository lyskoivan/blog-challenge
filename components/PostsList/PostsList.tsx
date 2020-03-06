import React from 'react';

import { Post } from '../../redux/blog/blogTypes';

import { PostList } from './PostsList.styled';

import PostsListItem from '../PostsListItem';

interface Props {
    posts: Array<Post>;
}

const PostsList = ({ posts = [] }: Props): JSX.Element => {
    return (
        <PostList>
            {posts.map(post => (
                <PostsListItem key={post.id} post={post} />
            ))}
        </PostList>
    );
};

export default PostsList;
