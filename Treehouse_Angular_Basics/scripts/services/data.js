'use strict'; 

angular.module('todoListApp')

.service('dataService', function($http){

	this.getTodos = function(callback){
	$http.get('mock/todos.json')
	.then(callback)
	};

	this.deleteTodo = function(todo){
		console.log('The ' + todo.name + ' has been deleted.');
		// database logic
	};

	this.saveTodos = function(todos){
		console.log(todos.length + ' todos were updated.')
		// database logic
	};

});