angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll();

  $scope.getAll = function() {
    
  }
});
