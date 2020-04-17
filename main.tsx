import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './src/store/reducer';

import App from './src/route/router';

let middlewares = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares);
const store = createStore(Reducer, {}, createStoreWithMiddleware);

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}