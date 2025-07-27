# PhotoReddit - Learn Frontend Development

A Reddit-style photo sharing application designed for learning React, JavaScript, HTML, and CSS.

## 🎯 Purpose

This project is a learning platform for frontend development. Most of the boilerplate code is already set up, allowing you to focus on implementing features and learning core concepts.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start both backend and frontend servers
npm start

# Backend only (port 3000)
npm run server

# Frontend only (port 8080)
npm run client
```

## 📁 Project Structure

```
AIPhotoReddit/
├── src/
│   ├── client/              # Frontend React application
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux store, actions, reducers
│   │   ├── services/       # API services
│   │   └── styles/         # CSS files
│   └── server/             # Backend Express server
│       ├── routes/         # API routes
│       ├── db/            # Database files
│       └── index.js       # Server entry point
├── uploads/               # Uploaded images directory
├── package.json          # Dependencies and scripts
├── webpack.config.js     # Webpack configuration
└── TUTORIAL.md          # Step-by-step learning guide
```

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **Redux** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS** - Styling (no frameworks, learn the basics!)

### Backend
- **Express.js** - Web server
- **SQLite** - Database
- **Multer** - File upload handling

## 📚 Learning Path

Follow the `TUTORIAL.md` file for a structured learning experience. The tutorial is divided into:

1. **Database Setup** - Learn SQL and database design
2. **Redux Integration** - State management patterns
3. **Component Development** - Building React components
4. **API Integration** - Connecting frontend to backend
5. **Advanced Features** - Search, pagination, optimization

## 🎨 Features to Build

- [ ] Photo feed with subreddit filtering
- [ ] Upload photos with captions
- [ ] Create and manage subreddits
- [ ] Post detail view
- [ ] Search functionality
- [ ] Responsive design

## 💡 Tips for Learning

1. **Start Small** - Complete one task at a time
2. **Read Errors** - Error messages are your friends
3. **Use DevTools** - Browser developer tools are essential
4. **Ask Why** - Understand the reasoning behind each concept
5. **Experiment** - Try different approaches

## 🐛 Debugging

- Frontend runs on `http://localhost:8080`
- Backend API runs on `http://localhost:3000`
- Redux DevTools shows state changes
- Network tab shows API calls
- Console shows JavaScript errors

## 📝 Future Enhancements

After completing the basic features, you can add:
- OpenAI integration for auto-captions
- User authentication
- Comments system
- Like/upvote functionality
- Dark mode

Happy Learning! 🎉
