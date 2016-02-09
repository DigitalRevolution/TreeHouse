(function(){
angular.module("todoListApp", [])

  .controller('mainCtrl', function($scope){
    $scope.helloWorld = function(){
    console.log('controller function fired successfully.')
    };

	$scope.todos = [
	{'name':'Proof Read'},
	{'name':'GSFS'},
	{'name':'Send New Articles'},
	{'name':'Adwords'},
	{'name':'Visibility Enterprises'},
	{'name':'Drink Coffee'}
	];
  }); 

})();