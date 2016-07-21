//------------------------------------------------------------------------------
angular.module('starter.directives', [])
//------------------------------------------------------------------------------
.directive('challengeCard', ['$ionicModal', function($ionicModal) {
  return {
    'restrict': 'E',
    'templateUrl': 'templates/directives/challengeCard.html',
    'scope': {
      'info': '=',
    },
    'link': link
  };
  function link($scope, $element, $attr) {
    $ionicModal.fromTemplateUrl('templates/directives/modal.html', {scope: $scope, animation: 'slide-in-up'}).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
  };
}])
//------------------------------------------------------------------------------
