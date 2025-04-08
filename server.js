const express = require("express");
const app = express();
const port = 3000;

//Middleware

///////////////setup static folder -middleware
app.use(express.static("./public"));
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
///////////////////////////


//Basic set up of request/response. this time we are sending the request/response to the html folders we created
//////////////////////////

  app.get('/', (req, res) => {
    res.render('index', {title: "index", content:"This is the index page"});
})

app.get('/about', (req, res) => {
    res.render('about', {title: "about", content:"This is the about page"});
})

app.get("/download", (req, res) =>{
    res.render('download', {title: "Download", content: "Click below to download the image"})
})

app.get("/download-image", (req, res) =>{
    res.download( __dirname + '/public/Ginger.jpeg')
})

app.get("/greet/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
  });
  
  app.post('/submit', (req, res) => {
    const name = req.body.name; // Gets the name from the form
    console.log("User submitted name:", name);
    res.send(`Thank you, ${name}! Your form was submitted.`);
  });
  

///////////////////////////////////////////////////





app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
    
    })