app.factory("HomeFactory", [ "$http", "$q", "$timeout",
	function($http, $q, $timeout) {

	return {
		links: function() {
			var abc = "test";
			console.log("test");
			return abc;
		}
	};
}]);