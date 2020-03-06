import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as types from '../../redux/blog/blogTypes';

import { createPost } from '../../redux/blog/blogOperations';

import { Form, FormInput, FormLabel, FormButton } from './PostForm.styled';

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
        <Form onSubmit={handleSubmit}>
            <FormLabel>
                Title
                <FormInput type="text" value={title} name="title" onChange={onChangeTitle} />
            </FormLabel>
            <FormLabel>
                Body
                <FormInput type="text" value={body} name="body" onChange={onChangeBody} />
            </FormLabel>
            <FormButton type="submit">Add Post</FormButton>
        </Form>
    );
};

const mapDispatchToProps = {
    createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
