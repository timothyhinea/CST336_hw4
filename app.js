const express = require("express");
const app = express();
var faker = require('faker');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    var image = faker.image.image();
    res.render("index.ejs", { image: image });
})

app.get("/data", function(req, res){
    res.render("data.html");
})

app.get("/examples", function(req, res){
    res.render("examples.html");
})

app.get("/pro-con", function(req, res){
    res.render("pro-con.html");
})

app.get("/mars", function(req, res){
    res.render("mars.html");
})


//Listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

//faker function!
