const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// GET all subreddits
router.get('/', (req, res) => {
  try {
    const db = req.app.locals.db;
    
    const query = `
      SELECT id, name, description, created_at
      FROM subreddits
      ORDER BY name ASC
    `;
    
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('Error fetching subreddits:', err);
        return res.status(500).json({ error: 'Failed to fetch subreddits' });
      }
      res.json(rows || []);
    });
  } catch (error) {
    console.error('Error in GET /subreddits:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST create new subreddit
router.post('/', (req, res) => {
  try {
    const { name, description } = req.body;
    
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    
    const db = req.app.locals.db;
    const id = uuidv4();
    const created_at = new Date().toISOString();
    
    // Check if subreddit already exists
    db.get('SELECT id FROM subreddits WHERE name = ?', [name], (err, row) => {
      if (err) {
        console.error('Error checking subreddit:', err);
        return res.status(500).json({ error: 'Failed to create subreddit' });
      }
      
      if (row) {
        return res.status(409).json({ error: 'Subreddit already exists' });
      }
      
      const query = `
        INSERT INTO subreddits (id, name, description, created_at)
        VALUES (?, ?, ?, ?)
      `;
      
      db.run(query, [id, name, description, created_at], function(err) {
        if (err) {
          console.error('Error creating subreddit:', err);
          return res.status(500).json({ error: 'Failed to create subreddit' });
        }
        
        res.status(201).json({
          id,
          name,
          description,
          created_at
        });
      });
    });
  } catch (error) {
    console.error('Error in POST /subreddits:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 