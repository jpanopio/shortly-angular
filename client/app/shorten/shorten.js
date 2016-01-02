angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function (link) {
    //$scope.link[link] = link; 
    // console.log($scope.link);
  
    var responseBody = Links.addOne({url: $scope.link })
      .catch(function(result) {
        console.log(result.data.error);
        $scope.error = result.data.error;
      });
    // console.log(responseBody);
    // begin forming the request
    // attach the token to the reqeust    
  };
});
