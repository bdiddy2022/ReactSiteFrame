import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store.js';
import { Provider } from 'react-redux';
import App from './App.js';


ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root'),
);