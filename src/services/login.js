app.factory("LoginFactory", [ "$http", "$q", "$timeout",
	function($http, $q, $timeout) {

	var username, role, token, myData;
	
	/*
	return {
		// Logs the current user in. If the login succeeds, this method returns
		// HTTP 200, but if it fails it will return HTTP 401 (Unauthorized).
		login: function(name_, password_) {
			
			var deferred = $q.defer();

			$http({
				method: 'POST',
				url: API_BACKEND + '/api/v1/login',
                data: { user: name_, pass: password_ }
            })
            .success(function(data, status, headers){
			
				username = data.User.Username;
				token = data.Token;
				role = data.User.Role;
				myData = data;

				deferred.resolve({
					myData: data,
					username: username,
					role: role,
					token: token
				});

				console.log("Login success!");
				console.log("data: ");
				console.log(data);
			})
			.error(function(data, status){
				deferred.reject();
				console.log("An error has occurred: " + data);
				console.log("Status: " + status);
			});
			return deferred.promise;
		},
		getToken: function() {
			return token;
		},
		getUsername: function() {
			return  username;
		},
		getRole: function() {
			return role;
		},
		getData: function() {
			return myData;
		}
	};*/
}]);