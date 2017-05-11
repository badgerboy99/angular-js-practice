var myFoodApp = angular.module('myFoodApp', []);

//myFoodApp.config(function{

//});

//myFoodApp.run(function{

//});

myFoodApp.controller('foodController', ['$scope', function($scope){

	$scope.message = "It's alive!";

	$scope.foods = [

		{
			name: "Aubergine",
			colour: 'purple',
			kg: 2.4
		},
		{
			name: 'Kumquat',
			colour: 'orange',
			kg: 2.95
		},
		{
			name: 'Artichoke',
			colour: 'green',
			kg: 3.89
		},
		{
			name: 'Pomegranate',
			colour: 'dark red',
			kg: 3.6
		},
	];
		

}]);