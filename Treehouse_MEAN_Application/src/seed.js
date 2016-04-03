'use strict'; 

var Todo = require('./models/todo.js'); 

var todos = [
	'Master JS', 
	'Finish Treehouse Lesson', 
	'Take Marles for a walk'
];

todos.forEach(function(todo, index){

	Todo.find({'name': todo}, function(err, todos){

		if(!err && !todos.length){
			Todo.create({completed: false, name: todo}); 
		};
	});
});