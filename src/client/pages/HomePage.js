import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const { items: posts, loading: postsLoading } = useSelector(state => state.posts);
  const { items: subreddits, loading: subredditsLoading } = useSelector(state => state.subreddits);
  const { selectedSubreddit } = useSelector(state => state.ui);

  useEffect(() => {
    // TODO: Dispatch actions to fetch posts and subreddits
    console.log('HomePage mounted - fetch data here');
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="sidebar-section">
          <h3>Subreddits</h3>
          <div className="subreddit-list">
            {/* TODO: Map through subreddits and display them */}
            <div className="subreddit-item">
              <a href="#" onClick={(e) => e.preventDefault()}>r/nature</a>
            </div>
            <div className="subreddit-item">
              <a href="#" onClick={(e) => e.preventDefault()}>r/cityscapes</a>
            </div>
            <div className="subreddit-item">
              <a href="#" onClick={(e) => e.preventDefault()}>r/portraits</a>
            </div>
          </div>
          <Link to="/admin" className="create-button">
            Create Post +
          </Link>
        </div>
      </div>
      
      <div className="main-content">
        <div className="feed">
          <h2>Photo Feed</h2>
          {postsLoading ? (
            <div className="loading">Loading posts...</div>
          ) : (
            <div className="posts-grid">
              {/* TODO: Map through posts and display them */}
              <div className="post-card">
                <img src="https://via.placeholder.com/300x200" alt="Placeholder" />
                <div className="post-info">
                  <p className="post-caption">Beautiful sunset over the mountains</p>
                  <p className="post-subreddit">r/nature</p>
                </div>
              </div>
              <div className="post-card">
                <img src="https://via.placeholder.com/300x200" alt="Placeholder" />
                <div className="post-info">
                  <p className="post-caption">City lights at night</p>
                  <p className="post-subreddit">r/cityscapes</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage; 