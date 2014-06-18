app.factory("HomeFactory", [ "$http", "$q", "$timeout",
	function($http, $q, $timeout) {

	return {
		links: function() {
			var x = "links function in factory";
			return x;
		}
	};

}]);