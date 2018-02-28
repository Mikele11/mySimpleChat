var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("I am in controller");


var refresh = function() {
  $http.get('/chat').success(function(response) {
    console.log("Geter");
    $scope.chat = response;
	console.log($scope.chat);
    $scope.contact.mesage = "";
  });
};

refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  //var $this = $(this);
  if ($('.form-control.name').val()==''){
		alert('Enter name');
	}else{
  //---------------	
		var d1 = new Date();
		var d1Year = d1.getFullYear();
		var d1Month = d1.getMonth();
		var d1Day = d1.getDate();
		var d2;
		//--------------------------------------------------
		d1Month=d1Month+1;
		if (d1Month<10){
			d2=d1Day+'.'+'0'+d1Month+'.'+d1Year;
		}else{
			d2=d1Day+'.'+d1Month+'.'+d1Year;
		};
		$scope.contact.registr=d2;
		//--
		$http.post('/chat', $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});
    };
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/chat/' + id).success(function(response) {
    refresh();
  });
};
/*
$scope.edit = function(id) {
  console.log(id);
  $http.get('/chat/' + id).success(function(response) {
    $scope.contact = response;
  });
}; 
*/ 
}]);﻿