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
        // error
      });
      
    });
  };

/*


  $scope.entered = "Discovering...";
  $scope.output = "Waiting...";
  $scope.inputType = "Discovering...";
  $scope.inputObject = "Discovering...";
  $scope.lastPositionLatitude = "Discovering...";
  $scope.lastPositionLongitude = "Discovering...";


  ionic.Platform.ready(function() {

    var outputTriggerCallback = function(output) {
      $scope.output = output;
      $scope.$apply()
    };

    var inputTriggerCallback = function(entered, geofence) {
      $scope.entered = entered;
      $scope.inputType = geofence.name;
      $scope.lastPositionLatitude = geofence.area.lat;
      $scope.lastPositionLongitude = geofence.area.lon;
      $scope.inputObject = JSON.stringify(geofence, null, 2);
      $scope.$apply();
    };

    var positionChangeCallback = function(coords) {
      $scope.lastPositionLatitude = coords.coordinates.lat;
      $scope.lastPositionLongitude = coords.coordinates.lon;
      $scope.$apply();
    };

    Proximiio.init(outputTriggerCallback, inputTriggerCallback, positionChangeCallback);
  });
*/

})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
