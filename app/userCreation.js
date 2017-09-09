/**
 * http://usejsdoc.org/
 */

/*const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

const personName = 'Alice';
const resultPromise = session.run(
  'CREATE (a:Person {name: $name}) RETURN a',
  {name: personName}
);

resultPromise.then(result => {
  session.close();

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node.properties.name);

  // on application exit:
  driver.close();
});*/

function User(){
	this.neo4j = require('neo4j-driver').v1;
	this.driver = this.neo4j.driver("bolt://162.250.190.189:7687", this.neo4j.auth.basic("neo4j", "neo4j"));
}

User.prototype.verify= function(id){
	resultPromise = session.run(
			  'CREATE (a:Person {name: $name}) RETURN a',
			  {name: personName}
			);
}

User.prototype.save=function(verificaionid, name, password){
	console.log("data : "+verificaionid+": "+name+" : "+ password);  
	var session = this.driver.session();
	
	session
	  .run( "CREATE (profile:Profile {name: {name}, emailid: {emailid}, password:{password}})", {name: name, emailid: verificaionid, password:password})
	  .then( function()
	  {
		  session.close();
		  this.driver.close();
		  console.log("success messge");  
	    return "created successfully";
	  });
	
}
exports.User = User;

