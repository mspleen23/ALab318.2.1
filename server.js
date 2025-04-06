const express = require("express");
const app = express();
const port = 3000;
const path = require('path'); //"path" is how we will get to the specific folder


///////////////setup static folder -middleware
// app.use(express.static(path.join(__dirname, 'public')));
///////////////////////////////////////////////////


///////////////////////////
//Basic set up of request/response. this time we are sending the request/response to the html folders we created
//////////////////////////

//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

///////////////////////////////////////////////////


let posts=[
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
    
];

//Get all post
app.get('/api/posts', (req, res) =>{
    res.json(posts); //serve the post through this endpoint

});

//Get a single post
app.get('/api/posts/:id', (req, res) =>{
    const id= parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id)); //serve the post through this endpoint

});




 
 





app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
    
    })