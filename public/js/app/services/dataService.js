angular
.module('dataService', ['firebase', 'ngRoute'])
.service('dataService', ['$firebaseArray', '$firebaseObject', '$routeParams', '$http', '$q',
  function($firebaseArray, $firebaseObject, $rp, $http, $q) {
    this.connectToRoom = function(id) {
      var ref = new Firebase("https://fiery-inferno-335.firebaseio.com/rooms/" + id);
      return $firebaseArray(ref);
    };
    this.saveCode = function(code) {
      var dfd = $q.defer();

      $http({
        url:'/code',
        method: 'POST',
        data: {
          code: code
        }
      })
      .success(dfd.resolve)
      .error(dfd.reject);

      return dfd.promise;
    };
  }
]);