angular
.module('messageDirective', [])
.directive('message', [function () {
  var converter = new Showdown.converter();
  return {
    restrict: 'E',
    link: {
      pre: function (scope, el, attrs) {
        var htmlText = converter.makeHtml(scope.$eval(attrs.content)  || '');
        el.html(htmlText);
      },
      post: function(scope, el, attrs) {
        var code = el.find('code');
        var length;
        if ((length = code.length) === 0) return;
        for (var i = 0; i < length; i++) {
          Prism.highlightElement(code[i]);
        }
      }
    }
  };
}]);