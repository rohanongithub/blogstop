import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page
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

// Start the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});