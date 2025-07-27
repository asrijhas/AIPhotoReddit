import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Posts API
export const postsAPI = {
  // Get all posts or posts from a specific subreddit
  getPosts: (subredditId = null) => {
    const params = subredditId ? { subreddit: subredditId } : {};
    return api.get('/posts', { params });
  },
  
  // Get a single post by ID
  getPost: (postId) => {
    return api.get(`/posts/${postId}`);
  },
  
  // Create a new post
  createPost: (formData) => {
    return api.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

// Subreddits API
export const subredditsAPI = {
  // Get all subreddits
  getSubreddits: () => {
    return api.get('/subreddits');
  },
  
  // Create a new subreddit
  createSubreddit: (data) => {
    return api.post('/subreddits', data);
  }
};

export default api; 