import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./reducers/todoReducer";
// import rootReducer from "./reducers/todoReducer";
// import {PlusMinusReducer} from "./reducers/PlusMinusReducer";
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
// const store = createStore(rootReducer)
// const store = createStore(PlusMinusReducer)
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
