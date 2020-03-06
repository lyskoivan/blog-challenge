import React from 'react';

import Link from 'next/link';

import { PostListItem, PostDescription } from './PostsListItem.styled';

import { Post } from '../../redux/blog/blogTypes';

interface Props {
    post: Post;
}

const PostsListItem = ({ post }: Props): JSX.Element => {
    const description = post.body.slice(0, 300);
    return (
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <PostListItem>
                <h3>{post.title}</h3>
                <PostDescription>{description}</PostDescription>
            </PostListItem>
        </Link>
    );
};

export default PostsListItem;
