//------------------------------------------------------------------------------
angular.module('starter.directives', [])
//------------------------------------------------------------------------------
.directive('challengeCard', function() {
  return {
    'restrict': 'E',
    'templateUrl': 'templates/directives/challengeCard.html',
    'scope': {
      'info': '=',
    },
    'link': link
  };
  function link($scope, $element, $attr) {
  };
})
//------------------------------------------------------------------------------
