var express= require('express');
var app= express();
var fs=require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.listen('3000',function(){
    console.log("Server started and listening on port 3000");
});

app.get('/',function(request,response){
    response.send("Vinodh is learning NODE JS!!!!");
});

app.get('/file',function(request,response){
    response.sendFile(__dirname+"/old.js");
});

app.get("/home",function(request,response){
    response.sendFile(__dirname+"/public/index.html");
});

app.post('/store',function(request,response){
  let a= request.body.name;
  let b=request.body.city;
  let c= request.body.desig;
  let data=a+' '+b+' '+c+'\n';
  fs.appendFile('data/info.txt',data,function(err){
      if(err)
      response.send("Not stored server issues...!!!");
      response.send("Data stored in to the file");
  });
});

app.use(express.static(__dirname+ '/public/css'));
app.use(express.static(__dirname+ '/public/js'));

