// convention to name directive and html file it points to the same thing

angular.module('todoListApp')

.directive('todos', function(){
	return {
		templateUrl: 'templates/todos.html', 
		controller: 'mainCtrl',
		replace: true
	}
});