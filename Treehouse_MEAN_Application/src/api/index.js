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

router.post('/todos', function(req, res){
	var todo = req.body; 
	Todo.create(todo, function(err, todo){
		if(err){
			return res.status(500).json({'err': err.message});
		}
		res.json({'todo': todo, message:'Todo Created'}); 
	})
});
// TODO: Add a PUT route to update existing entries

router.put('/todos/:id', function(req, res){
	var id = req.params.id;
	var todo = req.body; // this is an empty object for some reason. 
	console.log(todo._id);   // test todo
	if(todo && todo._id !== id) {
		return res.status(500).json({err: "Id's don't match."});
	}
	Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo){
		if(err){
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message:'Todo Updated.'}); 
	})
});

// TODO: Add a DELETE route to delete entries

router.delete('/todos/:id', function(req, res) {
  var id = req.params.id;
  Todo.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Todo Deleted' });
  });
});

module.exports = router; 