var app = angular.module("cpaApp", ["ngRoute"]);



app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeController"
	}).when("/login", {
		templateUrl: "templates/login.html",
		controller: "LoginController"
	}).when("/adminHome", {
		templateUrl: "templates/adminHome.html",
		controller: "LoginController"
	}).otherwise({ redirectTo: "/"});
});


		/*}).when("/evaluation/:evaluationID", {
		templateUrl: "templates/evaluationtemplate.html",
		controller: "EvalTempController"*/