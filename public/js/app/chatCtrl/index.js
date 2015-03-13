angular
.module('chatCtrl', ['ngRoute', 'onEnter', 'ngCookies'])
.controller('chatCtrl', ['$scope', 'dataService', '$routeParams', '$cookies', function($scope, $data, $rp, $cookies) {
  var name = $cookies.scsName;
  $scope.messages = $data.connectToRoom($rp.roomID);
  var addCode = function() {
    $data.saveCode($scope.newMessage.slice(5).trim())
      .then(function(url) {
        $scope.newMessage = '';
        $scope.messages.$add({
          sender: name,
          url: url,
          time: new Date().getTime(),
          codeLink: true
        });
      });
  };
  $scope.addNewMessage = function() {
    if (!$scope.newMessage) return;
    if ($scope.newMessage.slice(0, 5) === '/code') {
      return addCode();
    }
    $scope.messages.$add({
      sender: name,
      message: $scope.newMessage,
      time: new Date().getTime()
    });
    $scope.newMessage = '';
  };
}]);