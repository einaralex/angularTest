app.controller("LoginController", [ "$timeout", "$http" , "$rootScope", "$scope", "LoginFactory", "$routeParams", "$location",
	function($timeout, $http, $rootScope, $scope, LoginFactory, $routeParams, $location) {
	$scope.userN = "";
	$scope.passW = "";

	$scope.loginOn = function(){
		if ($scope.userN === "admin"){
			angular.extend(allData, {
				isAdmin: true
			});
		}

		LoginFactory.login($scope.userN, $scope.passW).then(function(myObj){
			$scope.userObj = myObj;
			console.log($scope.userObj);
			var token = myObj.token;
			$http.defaults.headers.common.Authorization = "Basic " + token;
		});

		if ($scope.userN === "admin"){
			$location.path("/adminHome");
		}
		else{
			$location.path("/");
		}
	};

	//$timeout( getUserInfo = function(){
	//	$scope.user = LoginFactory.getData();
	//}, 1000);

}]);