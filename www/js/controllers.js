angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicPlatform, $ionicLoading, $cordovaVibration) {
  $scope.vibrateNow = function() {
    console.log("antes del plat");
    $ionicPlatform.ready(function() {
      console.log("dentro del plat");
      $cordovaVibration.vibrate(100);
    });
  };
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };
  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }
    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
