import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';

import Header from '../components/Header/Header';

const MyApp = props => {
    const { Component, pageProps, store } = props;
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
        </Provider>
    );
};

export default withRedux(initStore)(MyApp);
