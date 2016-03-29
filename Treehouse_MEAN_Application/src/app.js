'use strict'

// Import express using require method
var express = require('express'); 

// Create an instance of the express server
var app = express(); 

// Configure express to serve files in our public file
app.use('/', express.static('public'));

// Create an instance of Router 
var router = express.Router(); 

router.get('/todos', function(req,res){
	res.json({todos:[]}); 
}); 

// Add the api namespace to the router to ensure that api routes don't conflice with routes in public folder
app.use('/api', router); 

// Instruct Express to listen on port 3k
app.listen(3000, function(){
	console.log('The server is reflecting the latest updates.'); 
});

// TODO: Add a POST route to create new entries
// TODO: Add a PUT route to update existing entries
// TODO: Add a DELETE route to delete entries