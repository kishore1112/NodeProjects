var os=require("os");
var fs=require("fs");
var http=require('http');
var copy=require('./file.js');


console.log("Memory!!!!"+(os.totalmem/(1024*1024*1024)));

console.log("This is my first Node JS file...!!!");
/*
fs.readFile("package.json",'utf8',function(error,data){
    if(!error)
    console.log(data);
    else
    console.log('error');
});*/

copy.fun();

console.log(copy.data);
console.log("brain");
console.log("Dark...!!");