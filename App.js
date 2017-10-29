import React, { Component } from 'react';
import { Provider,connect } from 'react-redux'
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import Reducer from './myApp/store/reducer';

import App from './myApp/router/router.js';

let middlewares = [];
middlewares.push(thunk);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = ((initialState)=>{
    return createStoreWithMiddleware(Reducer,initialState);
})()

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}