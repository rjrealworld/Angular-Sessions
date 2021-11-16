//create an api using node js

//import http object
var http = require('http');

var myServer = http.createServer(function(req, res) {//req carries data & url coming from client and res send output to client
    // res.write('Welcome to Node JS APIs.');
    // whatever we write inside .write() is HTML code
    res.write('<h1><center>Welcome to Node JS HTML file</center></h1>');
    res.end();
});

myServer.listen(3000); //3000 is the default port number
console.log('Server is running on port 3000');

// --------------------------------------------------
// You need to restart the server everytime you make changes to the code.
// Command to run this file: node app.js
// --------------------------------------------------
// In order to restart the server itself on each change, 
// you need to install nodemon by command: npm install -g nodemon
// Command to run this file: nodemon app.js
// --------------------------------------------------   
// to work with express js (framework), install express by command: npm install express