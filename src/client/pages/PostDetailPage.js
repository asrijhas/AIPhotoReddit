import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './PostDetailPage.css';

function PostDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPost, loading } = useSelector(state => state.posts);

  useEffect(() => {
    // TODO: Fetch the post details using the ID
    console.log('Fetch post with ID:', id);
  }, [id, dispatch]);

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  return (
    <div className="post-detail-container">
      <Link to="/" className="back-link">← Back to Feed</Link>
      
      <div className="post-detail">
        {/* TODO: Display actual post data */}
        <div className="post-image-container">
          <img src="https://via.placeholder.com/800x600" alt="Post" />
        </div>
        
        <div className="post-details">
          <h1 className="post-title">Beautiful sunset over the mountains</h1>
          <p className="post-meta">
            Posted in <span className="subreddit-link">r/nature</span> • 2 hours ago
          </p>
          
          <div className="post-actions">
            <button className="action-button">❤️ Like</button>
            <button className="action-button">💬 Comment</button>
            <button className="action-button">🔗 Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetailPage; 