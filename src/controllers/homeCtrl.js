app.controller("HomeController", [
	"$scope", "HomeFactory",
	function($scope, HomeFactory) {

		$scope.users = ['John', 'James', 'Jake'];

		console.log(HomeFactory.links());

	}
]);
