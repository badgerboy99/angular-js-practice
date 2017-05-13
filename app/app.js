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

myFoodApp.controller('foodController', ['$scope', '$http', function($scope, $http){


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

		$scope.newfood.food = "";
		$scope.newfood.colour = "";
		$scope.newfood.kg = "";

	};

	
	$http.get('data/foods.json').then(function(response){
		$scope.foods = response.data;
	});

}]);