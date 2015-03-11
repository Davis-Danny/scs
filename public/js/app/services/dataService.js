angular
.module('dataService', ['firebase', 'ngRoute'])
.service('dataService', ['$firebaseArray', '$routeParams', function($firebaseArray, $rp) {
    this.connect = function(id) {
      var ref = new Firebase("https://fiery-inferno-335.firebaseio.com/rooms/" + id);
      return $firebaseArray(ref);
    };
  }
]);