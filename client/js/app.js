var shopApp = angular.module('shopApp', ['ngRoute']);

shopApp.config(function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl: 'components/login.html',
		controller: 'loginCtrl'
	})
	.when('/register',{
		templateUrl: 'components/register.html',
		controller: 'registerCtrl'
	}).otherwise({
		templateUrl: 'components/home.html',
		controller: 'homeCtrl'
	})

});

var _url = "http://localhost:1337";


shopApp.controller('homeCtrl', function($scope, $location, $http){
	$scope.goToLogin = function(){
		$location.path('/login');
	};

	$scope.register = function(){
		$location.path('/register');
	};

	$scope.showCategory = function(){


	    var req = {
            url: _url +'/showCategoryList',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            cache: false
        };

        // alert(JSON.stringify(req));

        $http(req)
            .success(function(data,status,headers,config){
            	if(status==200){
	               	$scope.response = "Categories!";
	               	$scope.categories = data;
            	} else {
	               	$scope.response = "No Categories!";            		
            	}
            }).error(function(data,status){
        }).error(function(data,status,headers,config){
			$scope.response = "Error In Categories!!";
        });

	};


	$scope.showProducts = function(){


	    var req = {
            url: _url +'/showProductList',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            cache: false
        };

        // alert(JSON.stringify(req));

        $http(req)
            .success(function(data,status,headers,config){
            	if(status==200){
	               	$scope.response = "Categories!";
	               	$scope.products = data;
            	} else {
	               	$scope.response = "No Categories!";            		
            	}
            }).error(function(data,status){
        }).error(function(data,status,headers,config){
			$scope.response = "Error In Categories!!";
        });

	};


});


shopApp.controller('registerCtrl', function($scope, $http, $location){
	$scope.goToIndex = function(){

		$location.path('/');
	};

	$scope.register = function(){
		var username = $scope.username;
		var email = $scope.email;
		var password = $scope.password;

	    var req = {
            url: _url +'/register',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            cache: false,
            data: 'username='+ username +'&password='+password + '&email='+email
        };

		// alert(JSON.stringify(req));

        $http(req)
            .success(function(data,status,headers,config){
            	if(status==200){
	               	$scope.response = "Registered!";
            	} else {
	               	$scope.response = "User Already Exists!";            		
            	}
            }).error(function(data,status){
        }).error(function(data,status,headers,config){
			$scope.response = "Email Already Register!";
        });


	}

});

shopApp.controller('loginCtrl', function($scope, $http, $location){
	$scope.goToIndex = function(){
	
		$location.path('/');
	};


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

        // alert(JSON.stringify(req));

        $http(req)
            .success(function(data,status,headers,config){
            	if(status==200){
	               	$scope.response = "Loged In!";
            	} else {
	               	$scope.response = "No Such User!";            		
            	}
            }).error(function(data,status){
        }).error(function(data,status,headers,config){
			$scope.response = "failed!";
        });



	} // $scope.login
});