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

var _url = "http://localhost:1337";

shopApp.controller('homeCtrl', function($scope, $location){
	$scope.goToLogin = function(){
		$location.path('/login');
	};

	$scope.register = function(){
		$location.path('/register');
	}


});

shopApp.controller('loginCtrl', function($scope, $http){
	$scope.login = function(){
		var username = $scope.username;
		var password = $scope.password;

	    var req = {
            url: _url +'/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            cache: false,
            data: 'username='+ username +'&password='+password
        };

        alert(JSON.stringify(req));

        $http(req)
            .success(function(data,status,headers,config){
               	$scope.response = "yes!";
            }).error(function(data,status){
        }).error(function(data,status,headers,config){
			$scope.response = "no!";
        });



	} // $scope.login
});