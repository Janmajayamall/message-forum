import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postReducer from './../reducers/post';
import commentsReducer from './../reducers/comments.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      auth: authReducer,
      comments: commentsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
