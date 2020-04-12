import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const defaultState = {
    Feeling: 0,
    Understanding: 0,
    Support: 0,
    Comments: ""

}
const feedBack = (state = defaultState, action) => {
    if (action.type === 'FeelingsQ') {
        return { ...state, Feeling: action.payload };
    };
    if (action.type === 'UnderstandingQ') {
        return { ...state, Understanding: action.payload };
    };
    if (action.type === 'SupportQ') {
        return { ...state, Support: action.payload };
    };
    if (action.type === 'CommentsQ') {
        return { ...state, Comments: action.payload };
    };
    if (action.type === 'Reset') {
        return { defaultState };
    }
    return state

};

const reduxStore = createStore(
    combineReducers({
        feedBack
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
