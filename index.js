const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files from public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { userName, blogName, blogData } = req.body;
    
    res.render('index', {
        message: 'Post published successfully!'
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});