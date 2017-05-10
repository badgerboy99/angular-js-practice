var myFoodApp = angular.module('myFoodApp', []);

//myFoodApp.config(function{

//});

//myFoodApp.run(function{

//});

myFoodApp.controller('foodController', [function($scope){

	$scope.message = "It's alive!";

	$scope.foods = ['aubergine', 'kumquat', 'artichoke', 'pomegranate'];

}]);