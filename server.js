//jshint esversion:6
let array = [];
var count = 0;
const _= require('lodash');
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/posts/:topic",function(req,res){
  count=0;
  var heading = _.lowerCase(req.params.topic);
  var ele1;
  var alpha;
  array.forEach(function(element){
    // if(count>0)
    // break;
    var ele = _.lowerCase(element.title);
    alpha = "/posts/"+ele;
    count++;
    if(heading === ele)
    {
      console.log("match found");
      ele1 = element;

    }
  })
  res.render(__dirname+"/views/post.ejs",{ele1:ele1});
  // console.log(req.params.topic);
})
app.get("/",(req,res)=>{
  res.render(__dirname+"/views/index.ejs",{homeStartingContent:homeStartingContent,content:array});
})
app.get("/about",(req,res)=>{
  res.render(__dirname+"/views/about.ejs",{aboutContent});
})
app.get("/contact",(req,res)=>{
  res.render(__dirname+"/views/contact.ejs",{contactContent});
})
app.get("/compose",(req,res)=>{
  res.render(__dirname+"/views/compose.ejs");
})
// if(array.length-(array.length-1)>0 && array.length!=0)
// {
//   app.get()
// }
app.post("/compose",(req,res)=>{
  var object = {
    title:req.body.text,
    content:req.body.postBody
  };
  array.push(object);
  // res.render(__dirname+"/views/compose.ejs");
  res.redirect("/");
})











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
