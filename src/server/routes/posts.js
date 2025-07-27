const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const { subreddit } = req.query;
    
    let query = `
      SELECT 
        p.id,
        p.subreddit_id,
        p.caption,
        p.image_url,
        p.created_at,
        s.name as subreddit_name
      FROM posts p
      JOIN subreddits s ON p.subreddit_id = s.id
      ORDER BY p.created_at DESC
      LIMIT 20
    `;
    
    const params = [];
    
    if (subreddit) {
      query = `
        SELECT 
          p.id,
          p.subreddit_id,
          p.caption,
          p.image_url,
          p.created_at,
          s.name as subreddit_name
        FROM posts p
        JOIN subreddits s ON p.subreddit_id = s.id
        WHERE s.id = ?
        ORDER BY p.created_at DESC
        LIMIT 20
      `;
      params.push(subreddit);
    }
    
    db.all(query, params, (err, rows) => {
      if (err) {
        console.error('Error fetching posts:', err);
        return res.status(500).json({ error: 'Failed to fetch posts' });
      }
      res.json(rows || []);
    });
  } catch (error) {
    console.error('Error in GET /posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single post
router.get('/:id', (req, res) => {
  try {
    const db = req.app.locals.db;
    const { id } = req.params;
    
    const query = `
      SELECT 
        p.id,
        p.subreddit_id,
        p.caption,
        p.image_url,
        p.created_at,
        s.name as subreddit_name
      FROM posts p
      JOIN subreddits s ON p.subreddit_id = s.id
      WHERE p.id = ?
    `;
    
    db.get(query, [id], (err, row) => {
      if (err) {
        console.error('Error fetching post:', err);
        return res.status(500).json({ error: 'Failed to fetch post' });
      }
      
      if (!row) {
        return res.status(404).json({ error: 'Post not found' });
      }
      
      res.json(row);
    });
  } catch (error) {
    console.error('Error in GET /posts/:id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST create new post
router.post('/', (req, res) => {
  try {
    const upload = req.app.locals.upload;
    
    upload.single('image')(req, res, function (err) {
      if (err) {
        console.error('Upload error:', err);
        return res.status(400).json({ error: err.message });
      }
      
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }
      
      const { subreddit_id, caption } = req.body;
      
      if (!subreddit_id || !caption) {
        return res.status(400).json({ error: 'Subreddit ID and caption are required' });
      }
      
      const db = req.app.locals.db;
      const id = uuidv4();
      const image_url = `/uploads/${req.file.filename}`;
      const created_at = new Date().toISOString();
      
      const query = `
        INSERT INTO posts (id, subreddit_id, caption, image_url, created_at)
        VALUES (?, ?, ?, ?, ?)
      `;
      
      db.run(query, [id, subreddit_id, caption, image_url, created_at], function(err) {
        if (err) {
          console.error('Error creating post:', err);
          return res.status(500).json({ error: 'Failed to create post' });
        }
        
        res.status(201).json({
          id,
          subreddit_id,
          caption,
          image_url,
          created_at
        });
      });
    });
  } catch (error) {
    console.error('Error in POST /posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 