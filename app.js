var app = angular.module("myApp",[]);

app.controller("myController",["$scope",function($scope){
	$scope.message = "This message from controller"
	$scope.companyName = "Techmind pvt ltd"
     
     $scope.arrayOfUsers = [
            {
   name:"papa srinivas",
   address:"Telangana,hyderanad"
	},
	{
   name:"swan ",
   address:"delhi"
	}
     ]
	
	$scope.changeCompanyName = function(){
		$scope.companyName = "Techmind solutions"
	}

}])

app.directive("myCustomerDetailsDirective",function(){
	return {
		restrict:'EACM',
		templateUrl:  'customerDetails.html',
                  

		replace:true,
        scope:{
        	companyName : '@',
        	userDetails : '=',
        	change      : '&'
        }
	}

})