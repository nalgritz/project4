angular.module('simplyHome.controllers')
.controller('RenterRatingsCtrl', function($state, $http, $scope){
  $scope.ratingTasks = [];
  $scope.rating = {};
  // $scope.rating.rate = 3;
  $scope.rating.max = 5;
  var getRatings = function(){

  }
  getRatings();
})