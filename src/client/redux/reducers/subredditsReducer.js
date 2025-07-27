import {
  FETCH_SUBREDDITS_REQUEST,
  FETCH_SUBREDDITS_SUCCESS,
  FETCH_SUBREDDITS_FAILURE,
  CREATE_SUBREDDIT_REQUEST,
  CREATE_SUBREDDIT_SUCCESS,
  CREATE_SUBREDDIT_FAILURE
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const subredditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBREDDITS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_SUBREDDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null
      };
    
    case FETCH_SUBREDDITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case CREATE_SUBREDDIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case CREATE_SUBREDDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload].sort((a, b) => 
          a.name.localeCompare(b.name)
        ),
        error: null
      };
    
    case CREATE_SUBREDDIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    default:
      return state;
  }
};

export default subredditsReducer; 