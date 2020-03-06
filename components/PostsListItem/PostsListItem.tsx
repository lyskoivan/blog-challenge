import React from 'react';

import Link from 'next/link';

import { Post } from '../../redux/blog/blogTypes';

interface Props {
    post: Post;
}

const PostsListItem = ({ post }: Props): JSX.Element => {
    return (
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <li>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>
        </Link>
    );
};

export default PostsListItem;
