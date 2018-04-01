var express=require('express');
var route= express.Router();
var operations=require('./data-access/dao.js');

route.post('/add',function(request,response){
   let person={name: request.body.name, city: request.body.city, desig: request.body.desig};

   operations.addPerson(person,function(err,data){
      if(err)
         response.send("DB ERROR!!!!!");
      response.send("new row added in to the database");
   })

});

module.exports= route;