import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import chat from './chat.js';
import users from './users.js';
import currentUser from './currentUser.js';
import peer from '../lib/peer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    chat,
    currentUser,
    users
  }),
  composeEnhancers(applyMiddleware(thunk))
);

peer(store.dispatch, store.getState);

export default store;
