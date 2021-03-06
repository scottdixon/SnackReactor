'use strict';

var app = angular.module('snackReactorApp');

app.controller('CreateRestCtrl', function ($scope, $window, $http, $location, CreateRestaurant) {

  $scope.submitting = false;

  $scope.isCollapsed = false;

  var search = $location.search();

  $scope.successMessage = '';
  $scope.failureMessage = '';

  $scope.addRestaurant = function(object){
    CreateRestaurant(object.name, object.formatted_address)
      .success(function(data, status, headers, config){
        console.log('Hooray!');
      });
    $window.location.href = '/';
  };

  $scope.cancelButton = function() {
    $window.location.href = '/';
  };
});
