//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('DashCtrl', function($scope, $ionicPlatform, $cordovaVibration) {
  $scope.vibrate = function() {
    $ionicPlatform.ready(function() {
      $cordovaVibration.vibrate(100);
    });
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('ProximiioCtrl', function($scope, $http, myProximiio) {
  $scope.text_test = "Este texto es de prueba";
  $scope.test = function() {
    $http.get('https://api.proximi.fi/core/geofences?limit=10&skip=0', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + myProximiio.token
      }
    }).success(function(data) {
      console.log(data[0]);
      $scope.text_test = data;
    }).error(function(e) {
      console.log("Error: " + e);
      $scope.text_test = e;
    });
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('LocationCtrl', function($scope, $ionicLoading, $ionicPlatform, $cordovaGeolocation, myProximiio) {

  $scope.text = "Loading..."

  $scope.myPosition = [40.689211, -74.044575];

  var posOptions = {
    timeout: 10000,
    enableHighAccuracy: false
  };

  /*
  var watchOptions = {
    timeout : 3000,
    enableHighAccuracy: false
  };
  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(null, function(err) {
    // error
  }, function(position) {
    var lat  = position.coords.latitude
    var long = position.coords.longitude
    $scope.myPosition = [position.coords.latitude, position.coords.longitude];
  });
  */

  $scope.findMe = function() {
    myProximiio.testVariable = "aca no tanto";
    $ionicLoading.show({
      template: '<ion-spinner icon="spiral" class="spinner-energized"></ion-spinner><br>{{text}}...',
      scope: $scope
    });
    $ionicPlatform.ready(function() {
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        $scope.myPosition = [position.coords.latitude, position.coords.longitude];
        $ionicLoading.hide();
      }, function(err) {
        $scope.text = err.message;
      });
    });
  };

})
