(function() {
  'use strict';

  angular.module('onEnter', [])
  .directive('onEnter', [function() {
    var linkFunc = function(scope, el, attrs) {
      el.on('keypress', function(event) {
        if (event.keyCode !== 13) return;
        scope.$apply(attrs.onEnter);
      });
    };
    return {
      restrict: 'A',
      link: linkFunc
    };
  }]);
})();