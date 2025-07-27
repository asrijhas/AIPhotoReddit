import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './AdminPage.css';

function AdminPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: subreddits } = useSelector(state => state.subreddits);
  
  const [formData, setFormData] = useState({
    subreddit_id: '',
    caption: '',
    image: null
  });
  const [preview, setPreview] = useState(null);
  const [showCreateSubreddit, setShowCreateSubreddit] = useState(false);
  const [newSubreddit, setNewSubreddit] = useState({ name: '', description: '' });

  useEffect(() => {
    // TODO: Fetch subreddits if not already loaded
    console.log('Fetch subreddits for dropdown');
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Dispatch action to create post
    console.log('Submit form:', formData);
  };

  const handleCreateSubreddit = (e) => {
    e.preventDefault();
    // TODO: Dispatch action to create subreddit
    console.log('Create subreddit:', newSubreddit);
  };

  return (
    <div className="admin-container">
      <Link to="/" className="back-link">← Back to Feed</Link>
      
      <div className="admin-content">
        <h1>Upload a Photo</h1>
        
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-group">
            <label htmlFor="subreddit">Choose Subreddit</label>
            <select
              id="subreddit"
              name="subreddit_id"
              value={formData.subreddit_id}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a subreddit...</option>
              {/* TODO: Map through actual subreddits */}
              <option value="1">r/nature</option>
              <option value="2">r/cityscapes</option>
              <option value="3">r/portraits</option>
            </select>
            <button
              type="button"
              className="new-subreddit-btn"
              onClick={() => setShowCreateSubreddit(!showCreateSubreddit)}
            >
              + Create New Subreddit
            </button>
          </div>

          {showCreateSubreddit && (
            <div className="create-subreddit-form">
              <h3>Create New Subreddit</h3>
              <input
                type="text"
                placeholder="Subreddit name (e.g., nature)"
                value={newSubreddit.name}
                onChange={(e) => setNewSubreddit(prev => ({ ...prev, name: e.target.value }))}
              />
              <textarea
                placeholder="Description"
                value={newSubreddit.description}
                onChange={(e) => setNewSubreddit(prev => ({ ...prev, description: e.target.value }))}
              />
              <button type="button" onClick={handleCreateSubreddit} className="submit-btn">
                Create Subreddit
              </button>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="caption">Caption</label>
            <textarea
              id="caption"
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
              placeholder="Write a caption for your photo..."
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Photo</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="file-input"
            />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn primary">
            Upload Photo
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage; 