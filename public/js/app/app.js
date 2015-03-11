angular
.module('scs', [
  'ngRoute',
  'dataService',
  'chatCtrl'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    redirectTo: '/default'
  })
  .when('/:roomID', {
    controller: 'chatCtrl',
    templateUrl: '/template/room.html'
  });
}]);