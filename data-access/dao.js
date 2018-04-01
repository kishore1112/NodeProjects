var connect=require('./connection.js');

var operations={
  addPerson: function(person,callback){
      connect.query("insert into person(name,city,desig) values(?,?,?)",
      [person.name,person.city,person.desig],callback);
  }
};

module.exports=operations;