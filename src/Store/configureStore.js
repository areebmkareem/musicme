import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import auth from './Reducers/Auth';
import global from './Reducers/Global';

import * as types from './actionTypes';

const appReducer = combineReducers({
  auth,
  global,
});

let composeEnhancers = compose;

if (__DEV__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => {
  console.log('action.type: ', action.type);
  if (action.type === types.RESET_REDUX_STORE) state = undefined;
  return appReducer(state, action);
};
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
