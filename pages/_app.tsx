import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';
import 'normalize.css';

import Header from '../components/Header';

const MyApp = (props: any): any => {
    const { Component, pageProps, store } = props;
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
        </Provider>
    );
};

export default withRedux(initStore)(MyApp);
