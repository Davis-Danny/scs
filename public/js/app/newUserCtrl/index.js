angular
.module('newUserCtrl', ['onEnter', 'ngCookies', 'dataService'])
.controller('newUserCtrl', ['$scope', '$cookies', '$location', 'dataService', function($scope, $cookies, $location, $data) {
  $scope.saveUser = function() {
    $cookies.scsName = $scope.profile.username;
    $location.path(decodeURIComponent($location.search().redirectUrl));
    $location.search('redirectUrl', null);
  };
}]);