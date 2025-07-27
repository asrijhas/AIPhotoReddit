import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

// Import reducers
import postsReducer from '../reducers/postsReducer';
import subredditsReducer from '../reducers/subredditsReducer';
import uiReducer from '../reducers/uiReducer';

// Combine all reducers
const rootReducer = combineReducers({
  posts: postsReducer,
  subreddits: subredditsReducer,
  ui: uiReducer
});

// Create store with middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store; 