app.controller("HomeController", [
	"$scope", "HomeFactory",
	function($scope, HomeFactory) {
		
		console.log("Console log !!!");

		$scope.getLinks = function(){
			HomeFactory.links();
		};
	}
]);

function createLink(url, name){
	return {
		URL: url,
		Name: name
	};
}