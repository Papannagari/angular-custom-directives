var app = angular.module("myApp",[]);

app.controller("myController",["$scope",function($scope){
	$scope.message = "myController"
}])

app.directive("myCustomerDetailsDirective",function(){
	return {
		restrict:'EAC',
		template:"<h1>this complex directive</h1>",
		replace:true

	}
})