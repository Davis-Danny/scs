angular
.module('scs', [
  'ngRoute',
  'ngCookies',
  'dataService',
  'chatCtrl',
  'newUserCtrl'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    redirectTo: '/rooms/default'
  })
  .when('/user', {
    controller: 'newUserCtrl',
    templateUrl: '/template/newUser.html'
  })
  .when('/rooms', {
    redirectTo: '/rooms/default'
  })
  .when('/rooms/:roomID', {
    controller: 'chatCtrl',
    templateUrl: '/template/room.html'
  });
}])
.run(['$rootScope', '$cookies', '$location', function($rootScope, $cookies, $location) {
  var redirectUrl = '';
  $rootScope.$on('$routeChangeStart', function (event, next) {
    if ($cookies.scsName) return;
    if (!~redirectUrl.indexOf('user') && $location.path() !== '/user') $location.search('redirectUrl', (redirectUrl = $location.path()));
    $location.path('/user');
  });
}]);