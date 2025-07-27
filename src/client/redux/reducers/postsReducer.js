import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from '../actions/types';

const initialState = {
  items: [],
  currentPost: null,
  loading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null
      };
    
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPost: action.payload,
        error: null
      };
    
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [action.payload, ...state.items],
        error: null
      };
    
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    default:
      return state;
  }
};

export default postsReducer; 