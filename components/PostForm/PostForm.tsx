import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as types from '../../redux/blog/blogTypes';

import { createPost } from '../../redux/blog/blogOperations';

interface Props {
    createPost: any;
}

const PostForm = ({ createPost }: Props): JSX.Element => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitle = (e): void => {
        setTitle(e.target.value);
    };

    const onChangeBody = (e): void => {
        setBody(e.target.value);
    };

    const reset = (): void => {
        setTitle('');
        setBody('');
    };

    const handleSubmit = (e): void => {
        e.preventDefault();

        if (!title || !body) return;

        const newPost: types.CreatePost = {
            title,
            body,
        };

        createPost(newPost);

        reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" value={title} name="title" onChange={onChangeTitle} />
            </label>
            <label>
                Body
                <input type="text" value={body} name="body" onChange={onChangeBody} />
            </label>
            <button type="submit">Add Post</button>
        </form>
    );
};

const mapDispatchToProps = {
    createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
