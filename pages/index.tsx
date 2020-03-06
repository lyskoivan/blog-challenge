import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Post } from '../redux/blog/blogTypes';

import * as selectors from '../redux/blog/blogSelectors';
import * as operatons from '../redux/blog/blogOperations';

import PostsList from '../components/PostsList';

interface Props {
    posts: Array<Post>;
    getPosts: any;
}

const index = ({ posts, getPosts }: Props): JSX.Element => {
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <PostsList posts={posts} />
        </div>
    );
};

interface StateProps {
    posts: Array<Post>;
}

const mapStateToProps = (store): StateProps => ({
    posts: selectors.getPosts(store),
});

const mapDispatchToProps = {
    getPosts: operatons.getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
