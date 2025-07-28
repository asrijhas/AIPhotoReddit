# PhotoReddit Tutorial - Learn React, JavaScript, HTML & CSS

Welcome to the PhotoReddit tutorial! This guide will help you build a Reddit-like photo sharing application while learning frontend development fundamentals.

## 📋 Prerequisites

Before starting, make sure you have:
- [*] Node.js installed (version 14 or higher)
- [ ] A code editor (VS Code recommended)
- [ ] Basic understanding of programming concepts (variables, functions, loops)

## 🛠 Development Environment Setup

### 1. Install Required Tools

#### VS Code Extensions
Install these helpful extensions:
- [ ] ES7+ React/Redux/React-Native snippets
- [ ] Prettier - Code formatter
- [ ] ESLint
- [ ] Auto Rename Tag

#### Browser Extensions
- [ ] React Developer Tools
- [ ] Redux DevTools

### 2. Project Setup

```bash
# Clone the repository
git clone <repository-url>
cd AIPhotoReddit

# Install dependencies
npm install

# Start the development servers
npm start
```

This will start both the backend server (port 3000) and frontend dev server (port 8080).

## 📚 Learning Path Overview

We'll build this app step by step:
1. Database setup
2. Create Redux actions
3. Build the home page feed
4. Implement the sidebar
5. Create post details page
6. Build the admin upload page
7. Add advanced features

## 🎯 Part 1: Database Setup (Beginner)

### Task 1.1: Create SQLite Tables

The backend server is already configured to use SQLite. Your first task is to create the database schema.

**What you need to do:**
1. Create a file `src/server/db/schema.sql`
2. Define two tables: `subreddits` and `posts`

**Requirements:**
- Subreddits table should have: id, name, description, created_at
- Posts table should have: id, subreddit_id, caption, image_url, created_at
- Use appropriate data types and constraints

**Hints:**
- SQLite uses TEXT for strings and varchar
- Use PRIMARY KEY for id fields
- Don't forget FOREIGN KEY for relationships
- Look up SQLite date/time functions for timestamps

- [ ] Created schema.sql file
- [ ] Defined subreddits table
- [ ] Defined posts table
- [ ] Added proper constraints

### Task 1.2: Initialize Database

Create a script to run your schema and set up the database.

**What you need to do:**
1. Create `src/server/db/init.js`
2. Read the schema file and execute it
3. Add a npm script to run this initialization

**Hints:**
- Use Node.js `fs` module to read files
- The sqlite3 package has an `exec` method for running SQL
- Check if tables exist before creating them

- [ ] Created init.js script
- [ ] Script reads and executes schema
- [ ] Added npm script for easy execution
- [ ] Tested database creation

**Git checkpoint:** `git add . && git commit -m "feat: Add database schema and initialization"`

## 🎯 Part 2: Redux Actions (Beginner-Intermediate)

### Task 2.1: Create Post Actions

Now let's connect the frontend to the backend using Redux actions.

**What you need to do:**
1. Create `src/client/redux/actions/postActions.js`
2. Implement three actions: fetchPosts, fetchPost, createPost

**Requirements:**
- Use the API service already provided in `src/client/services/api.js`
- Handle loading, success, and error states
- Use Redux Thunk for async actions

**Hints:**
- Redux Thunk allows you to return functions from action creators
- Dispatch multiple actions: REQUEST → SUCCESS/FAILURE
- Look at the action types already defined

- [ ] Created postActions.js file
- [ ] Implemented fetchPosts action
- [ ] Implemented fetchPost action
- [ ] Implemented createPost action
- [ ] Proper error handling

### Task 2.2: Create Subreddit Actions

Similarly, create actions for subreddits.

**What you need to do:**
1. Create `src/client/redux/actions/subredditActions.js`
2. Implement fetchSubreddits and createSubreddit actions

- [ ] Created subredditActions.js
- [ ] Implemented fetchSubreddits
- [ ] Implemented createSubreddit

**Git checkpoint:** `git add . && git commit -m "feat: Add Redux actions for posts and subreddits"`

## 🎯 Part 3: Home Page Implementation (Intermediate)

### Task 3.1: Fetch and Display Posts

Time to make the home page functional!

**What you need to do:**
1. In HomePage.js, replace the TODO comment with actual Redux action dispatch
2. Map through the posts from Redux state and display them
3. Handle loading and error states
4. Make post cards clickable (navigate to detail page)

**Requirements:**
- Display actual images from posts
- Show post caption and subreddit name
- Format the creation date nicely
- Add proper alt text for images

**Hints:**
- Use `useEffect` hook to fetch data on component mount
- React Router's `useNavigate` or `Link` for navigation
- JavaScript's `Date` object for formatting timestamps

- [ ] Dispatched fetchPosts on mount
- [ ] Mapped through posts array
- [ ] Displayed loading state
- [ ] Made cards clickable
- [ ] Formatted dates properly

### Task 3.2: Implement Sidebar

Make the sidebar functional to show actual subreddits.

**What you need to do:**
1. Fetch subreddits on component mount
2. Display them in the sidebar
3. Implement filtering by subreddit when clicked
4. Highlight the selected subreddit

**Hints:**
- You can pass query parameters to the fetchPosts action
- Use Redux UI state to track selected subreddit
- CSS classes can be conditionally applied for highlighting

- [ ] Fetched subreddits
- [ ] Displayed subreddit list
- [ ] Implemented filtering
- [ ] Added visual feedback for selection

**Git checkpoint:** `git add . && git commit -m "feat: Implement home page with working feed and sidebar"`

## 🎯 Part 4: Post Detail Page (Intermediate)

### Task 4.1: Fetch and Display Single Post

Make the post detail page show real data.

**What you need to do:**
1. Use the post ID from URL params to fetch post details
2. Display the full-size image and details
3. Handle loading and error states
4. Show "Post not found" for invalid IDs

**Hints:**
- `useParams` hook gives you URL parameters
- Consider image loading states
- Reuse error message styles from index.css

- [ ] Fetched post by ID
- [ ] Displayed post data
- [ ] Handled loading state
- [ ] Handled error/not found

**Git checkpoint:** `git add . && git commit -m "feat: Implement post detail page"`

## 🎯 Part 5: Admin Upload Page (Intermediate-Advanced)

### Task 5.1: Complete Upload Form

Make the upload form functional.

**What you need to do:**
1. Fetch and display real subreddits in dropdown
2. Implement the form submission
3. Show success/error messages
4. Navigate to home page after successful upload

**Requirements:**
- Validate file size and type
- Show upload progress
- Clear form after submission
- Handle all error cases

**Hints:**
- FormData is needed for file uploads
- The API expects multipart/form-data
- Redux actions can return promises

- [ ] Populated subreddit dropdown
- [ ] Implemented form submission
- [ ] Added validation
- [ ] Handled success/error states
- [ ] Added navigation after upload

### Task 5.2: Create Subreddit Feature

Implement the "Create New Subreddit" functionality.

**What you need to do:**
1. Handle the create subreddit form submission
2. Update the dropdown after creation
3. Auto-select the new subreddit
4. Show appropriate feedback

- [ ] Implemented subreddit creation
- [ ] Updated dropdown dynamically
- [ ] Added proper validation
- [ ] Showed success feedback

**Git checkpoint:** `git add . && git commit -m "feat: Complete admin upload functionality"`

## 🎯 Part 6: Enhanced Features (Advanced)

### Task 6.1: Add Search Functionality

Make the search bar in the header functional.

**What you need to do:**
1. Create a search component
2. Implement client-side filtering of posts
3. Add debouncing to prevent too many updates
4. Show "no results" message when appropriate

**Hints:**
- You can filter posts by caption in Redux
- Debouncing prevents function calls on every keystroke
- Consider searching in both caption and subreddit name

- [ ] Created search functionality
- [ ] Implemented filtering
- [ ] Added debouncing
- [ ] Handled empty results

### Task 6.2: Add Loading Skeletons

Improve UX with skeleton loaders instead of simple "Loading..." text.

**What you need to do:**
1. Create skeleton components for posts and sidebar
2. Show skeletons while data is loading
3. Add shimmer animation effect

**Hints:**
- CSS animations can create shimmer effects
- Skeleton should match the layout of actual content
- Consider reusable skeleton components

- [ ] Created skeleton components
- [ ] Added shimmer animation
- [ ] Replaced loading text

### Task 6.3: Implement Pagination

Add pagination to handle large numbers of posts.

**What you need to do:**
1. Modify the API to accept page parameters
2. Add pagination controls to the home page
3. Update Redux to handle paginated data
4. Maintain scroll position between pages

**Hints:**
- Backend routes already accept query parameters
- Consider infinite scroll as an alternative
- Don't forget to reset pagination when filtering

- [ ] Modified API calls
- [ ] Added pagination UI
- [ ] Updated Redux state
- [ ] Handled edge cases

**Git checkpoint:** `git add . && git commit -m "feat: Add search, loading skeletons, and pagination"`

## 🎯 Part 7: Code Quality (Advanced)

### Task 7.1: Add Error Boundaries

Implement React Error Boundaries to gracefully handle errors.

**What you need to do:**
1. Create an ErrorBoundary component
2. Wrap main routes with error boundary
3. Show user-friendly error messages
4. Add error logging

- [ ] Created ErrorBoundary component
- [ ] Implemented error UI
- [ ] Added error logging
- [ ] Tested error scenarios

### Task 7.2: Performance Optimization

Optimize the app for better performance.

**What you need to do:**
1. Implement image lazy loading
2. Add React.memo to prevent unnecessary re-renders
3. Optimize Redux selectors
4. Add webpack bundle analyzer

**Hints:**
- Intersection Observer API for lazy loading
- React DevTools Profiler helps identify performance issues
- Consider code splitting for routes

- [ ] Implemented lazy loading
- [ ] Added memoization
- [ ] Optimized selectors
- [ ] Analyzed bundle size

**Git checkpoint:** `git add . && git commit -m "feat: Add error handling and performance optimizations"`

## 🚀 Bonus Challenges

Once you've completed all tasks, try these additional challenges:

### Challenge 1: Dark Mode
Add a dark mode toggle that persists user preference.

### Challenge 2: Infinite Scroll
Replace pagination with infinite scroll on the home page.

### Challenge 3: Image Filters
Add Instagram-like filters to uploaded images using CSS.

### Challenge 4: Comments System
Add a commenting system to posts (requires backend changes).

### Challenge 5: User Profiles
Add user authentication and profiles (significant backend work).

## 📝 Interview Preparation Topics

As you build this app, you're learning concepts commonly asked in interviews:

### JavaScript Concepts
- [ ] Promises and async/await
- [ ] Array methods (map, filter, reduce)
- [ ] ES6+ features (destructuring, spread operator)
- [ ] Event handling and bubbling
- [ ] Closures and scope

### React Concepts
- [ ] Component lifecycle
- [ ] Hooks (useState, useEffect, custom hooks)
- [ ] Props vs State
- [ ] Controlled vs Uncontrolled components
- [ ] Performance optimization techniques

### CSS Concepts
- [ ] Flexbox and Grid
- [ ] Responsive design
- [ ] CSS specificity
- [ ] Animations and transitions
- [ ] CSS-in-JS vs traditional CSS

### General Web Development
- [ ] HTTP methods and status codes
- [ ] CORS and web security
- [ ] Browser storage options
- [ ] Web performance metrics
- [ ] Accessibility best practices

## 🎉 Completion Checklist

### Core Features
- [ ] Database setup complete
- [ ] Redux store configured
- [ ] Home page with feed
- [ ] Sidebar with subreddits
- [ ] Post detail page
- [ ] Upload functionality
- [ ] Create subreddit feature

### Enhanced Features
- [ ] Search functionality
- [ ] Loading states
- [ ] Error handling
- [ ] Pagination
- [ ] Performance optimizations

### Code Quality
- [ ] Consistent code style
- [ ] Meaningful variable names
- [ ] Proper error handling
- [ ] Responsive design
- [ ] Cross-browser compatibility

## 🤖 Getting Help

When stuck:
1. Read error messages carefully
2. Use console.log for debugging
3. Check browser DevTools Network tab
4. Refer to official documentation
5. Search for specific error messages
6. Break problems into smaller parts

Remember: The goal is to learn, not just complete tasks. Take time to understand each concept!

Good luck! 🚀 
