angular
.module('chatCtrl', ['ngRoute', 'onEnter', 'ngCookies'])
.controller('chatCtrl', ['$scope', 'dataService', '$routeParams', '$cookies', function($scope, $data, $rp, $cookies) {
  var name = $cookies.scsName;
  $scope.messages = $data.connect($rp.roomID);
  $scope.addNewMessage = function() {
    $scope.messages.$add({
      sender: name,
      message: $scope.newMessage,
      time: new Date().getTime()
    });
    $scope.newMessage = '';
  };
}]);