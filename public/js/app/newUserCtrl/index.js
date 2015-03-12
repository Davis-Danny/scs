angular
.module('newUserCtrl', ['onEnter', 'ngCookies'])
.controller('newUserCtrl', ['$scope', '$cookies', '$location', function($scope, $cookies, $location) {
  $scope.saveUser = function() {
    $cookies.scsName = $scope.username;
    $location.path(decodeURIComponent($location.search().redirectUrl));
    $location.search('redirectUrl', null);
  };
}]);