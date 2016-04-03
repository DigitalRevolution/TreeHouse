'use strict'; 

var express = require('express'); 
// create variable to hold Todo model -- models conventionally in intial caps
var Todo = require('../models/todo'); 
// var todos = require('../../mock/todos.json'); 

// Create an instance of Router 
var router = express.Router(); 

router.get('/todos', function(req,res){
	Todo.find({}, function(err, todos){
		if(err){
			// do something; 
			return res.status(500).json({message: err.message}); 
		}
		res.json({todos: todos}); 
	}); 
}); 

// TODO: Add a POST route to create new entries
// TODO: Add a PUT route to update existing entries
// TODO: Add a DELETE route to delete entries

module.exports = router; 