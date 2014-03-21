app.controller("HomeController", [
	"$scope", "HomeFactory",
	function($scope, HomeFactory) {
		
		$scope.getLinks = function(){

			HomeFactory.links();
		}
	}
]);

function createLink(url, name){
	return {
		URL: url,
		Name: name
	};
}