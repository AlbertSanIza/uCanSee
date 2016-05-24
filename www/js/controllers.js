//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('DashCtrl', function($scope, $ionicPlatform, $cordovaVibration) {
  $scope.algo = [40.74, -74.18];
  $scope.vibrate = function() {
    $ionicPlatform.ready(function() {
      $cordovaVibration.vibrate(100);
    });
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('ProximiioCtrl', function($scope, $http, myProximiio) {
  $scope.textoo = "Este texto es de prueba";
  $scope.test = function() {
    $http.get('https://api.proximi.fi/core/geofences?limit=10&skip=0', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + myProximiio.token
      }
    }).success(function(data) {
      console.log(data[0]);
      $scope.textoo = data;
    }).error(function(e) {
      console.log("Error: " + e);
      $scope.textoo = e;
    });
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('LocationCtrl', function($scope, $ionicPlatform, $cordovaGeolocation) {

  $scope.myPosition = [40.689211, -74.044575];

  var posOptions = {
    timeout: 10000,
    enableHighAccuracy: false
  };

  $scope.findMe = function() {
    $ionicPlatform.ready(function() {
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        $scope.myPosition = [position.coords.latitude, position.coords.longitude];
      }, function(err) {
      });
    });
  };

})
