import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;
var name,blogInfo,blogTitle;

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

//recieving the GET response from client
app.get('/',(req,res)=>{
    res.render('index')
})


//getting the response and sending to blog page
app.post('/submit',(req,res)=>{

    
    name =req.body['userName'];
    blogTitle =req.body['blogName'];
    blogInfo =req.body['blogData'];
    
    res.render('submit.ejs',{
        authorOfBlog : name,
        titleOfBlog : blogTitle,
        infoOfBlog : blogInfo,
    })

});


//when edit is tapped
app.get('/edit',(req,res)=>{
    res.redirect('/')
});



//starting the server

app.listen(port , (req,res)=>{
    console.log(`Server running on port : ${port}`);
});