import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import * as types from '../../../redux/blog/blogTypes';

import { getPost } from '../../../redux/blog/blogSelectors';
import { getPostById } from '../../../redux/blog/blogOperations';

import Post from '../../../components/Post';

interface Props {
    post: types.Post;
    getPostById: any;
}

const PostPage = ({ post, getPostById }: Props): JSX.Element => {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        getPostById(id);
    }, []);

    return <>{post && <Post post={post} />}</>;
};

interface StateProps {
    post: types.Post;
}

const mapStateToProps = (store): StateProps => ({
    post: getPost(store),
});

const mapDispatchToProps = {
    getPostById: getPostById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
