angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  var result = Links.getAll();
  $scope.data.links = result;

});
