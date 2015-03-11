angular
.module('chatCtrl', ['ngRoute', 'onEnter'])
.controller('chatCtrl', ['$scope', 'dataService', '$routeParams', function($scope, $data, $rp) {
  $scope.messages = $data.connect($rp.roomID);
  $scope.addNewMessage = function() {
    $scope.messages.$add({
      sender: 'Josh',
      message: $scope.newMessage,
      time: new Date().getTime()
    });
    $scope.newMessage = '';
  };
}]);