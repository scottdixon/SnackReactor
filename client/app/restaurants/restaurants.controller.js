'use strict';
//refactor to services
angular.module('snackReactorApp')
  .controller('RestaurantsCtrl', function ($scope, $http, $log) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
});