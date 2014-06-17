var app = angular.module("myApp", ["ngRoute"]);



app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeController",
		title: 'testing'
	}).when("/login", {
		templateUrl: "templates/login.html",
		controller: "LoginController"
	});
	//.otherwise({ redirectTo: "/"});
});
