var myFoodApp = angular.module('myFoodApp', ['ngRoute']);

myFoodApp.config (['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html'
		})	
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'foodController'
			})
		.otherwise({
			redirectTo: '/home'
			});


}]);

	

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

	$scope.addFood = function(){
		$scope.foods.push({
			name: $scope.newfood.food,
			colour: $scope.newfood.colour,
			kg: $scope.newfood.kg,
			available: true
		});

		$scope.newfood.food = [];
		$scope.newfood.colour = [];
		$scope.newfood.kg = [];

	};

	$scope.foods = [

		{
			name: "Aubergine",
			colour: 'black',
			kg: 2.4,
			available: true,
			thumb: "content/img/aubergine.jpeg"
		},
		{
			name: 'Kumquat',
			colour: 'orange',
			kg: 2.95,
			available: true,
			thumb: "content/img/kumquat.jpeg"
		},
		{
			name: 'Artichoke',
			colour: 'green',
			kg: 3.89,
			available: true,
			thumb: "content/img/artichoke.jpeg"
		},
		{
			name: 'Pomegranate',
			colour: 'red',
			kg: 3.6,
			available: true,
			thumb: "content/img/pomegranate.jpg"
		},
	];
		

}]);