import {
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_SELECTED_SUBREDDIT
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  selectedSubreddit: null
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    
    case SET_SELECTED_SUBREDDIT:
      return {
        ...state,
        selectedSubreddit: action.payload
      };
    
    default:
      return state;
  }
};

export default uiReducer; 