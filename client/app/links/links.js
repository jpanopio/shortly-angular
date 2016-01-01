angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  
  Links.getAll().then(function(res) {
    $scope.data.links = res;
  });
});
