'use strict';

// Import express using require method
var express = require('express'); 
var todos = require('../mock/todos.json'); 
var router = require('./api'); 

// Create an instance of the express server
var app = express(); 

// Configure express to serve files in our public file
app.use('/', express.static('public'));

// Add the api namespace to the router to ensure that api routes don't conflice with routes in public folder
app.use('/api', router); 

// Instruct Express to listen on port 3k
app.listen(3000, function(){
	console.log('The server is reflecting the latest updates.'); 
});
