var myFoodApp = angular.module('myFoodApp', ['ngRoute','ngAnimate']);

myFoodApp.config (['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'foodController'
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

myFoodApp.directive('randomFood', [function(){

	return {
		restrict: 'E',
		scope: {       //'isolate' scope
			foods: '=',
			title: '='
		},
		templateUrl: 'views/random.html',
		transclude: true,
		replace: true,
		//template: '<img ng-src="{{foods[random].thumb}}">',		
		controller: function($scope){
			$scope.random = Math.floor(Math.random() *4);
		}

		};

	
}]);

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

	$scope.removeAll = function(){
		$scope.foods = [];
	};
	
	$http.get('data/foods.json').then(function(response){
		$scope.foods = response.data;
	});

}]);