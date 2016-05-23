//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('DashCtrl', function($scope, $ionicPlatform, $cordovaVibration, $cordovaGeolocation) {
  $scope.vibrate = function() {
    $ionicPlatform.ready(function() {
      $cordovaVibration.vibrate(100);
      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat  = position.coords.latitude
        var long = position.coords.longitude
        console.log("lat: " + lat + " lon: " + long);
      }, function(err) {
      });
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
    }).error(function(e) {
      console.log("Error: " + e);
    });
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
