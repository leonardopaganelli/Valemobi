var angular = angular(),
	express = require('express'),
	app = express();

angular.module("App",[]);

angular.module("App").controller('MainController',function($scope){
	$scope.title = "MyApp";
});
