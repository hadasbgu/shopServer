var shopApp = angular.module('shopApp', ['ngRoute']);

shopApp.config(function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl: 'components/login.html',
		controller: 'loginCtrl'
	}).otherwise({
		templateUrl: 'components/home.html',
		controller: 'homeCtrl'
	})

});

shopApp.controller('homeCtrl', function($scope){
	$scope.goToLogin = function(){
		$location.path('/login');
	};

	$scope.register = function(){
		$location.path('/register');
	}


});

shopApp.controller('loginCtrl', function($scope){
	$scope.login = function(){
		var username = $scope.username;
		var password = $scope.password;
	}
});