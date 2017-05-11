var myFoodApp = angular.module('myFoodApp', []);

//myFoodApp.config(function{

//});

//myFoodApp.run(function{

//});

myFoodApp.controller('foodController', ['$scope', function($scope){

	$scope.message = "It's alive!";

	$scope.removeFood = function(food){
		var removedFood = $scope.foods.indexOf(food);
		$scope.foods.splice(removedFood, 1)
	}

	$scope.foods = [

		{
			name: "Aubergine",
			colour: 'purple',
			kg: 2.4,
			available: true
		},
		{
			name: 'Kumquat',
			colour: 'orange',
			kg: 2.95,
			available: true
		},
		{
			name: 'Artichoke',
			colour: 'green',
			kg: 3.89,
			available: true
		},
		{
			name: 'Pomegranate',
			colour: 'red',
			kg: 3.6,
			available: true
		},
	];
		

}]);