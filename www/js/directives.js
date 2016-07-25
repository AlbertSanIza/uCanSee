//------------------------------------------------------------------------------
angular.module('starter.directives', [])
//------------------------------------------------------------------------------
.directive('challengeCard', ['$ionicModal', '$ionicPlatform', '$cordovaBarcodeScanner', function($ionicModal, $ionicPlatform, $cordovaBarcodeScanner) {
  return {
    'restrict': 'E',
    'templateUrl': 'templates/directives/challengeCard.html',
    'scope': {
      'info': '=',
      'location': '=',
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
    $scope.scanCode = function() {
      $ionicPlatform.ready(function() {
        $cordovaBarcodeScanner.scan().then(function(barcodeData) {
          if(barcodeData.text == "UCANSEE") {
            $scope.info.done = true;
          }
        }, function(error) {
        });
      });
    };
  };
}])
//------------------------------------------------------------------------------
