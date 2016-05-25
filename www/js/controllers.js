//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('IntroCtrl', function($scope, $state) {
  $scope.login = function() {
    $state.go('login');
  };
  $scope.register = function() {
    $state.go('register');
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('LoginCtrl', function($scope, $state, $ionicPlatform) {
  $scope.signIn = function() {
    $state.go('tab.dashboard');
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('DashboardCtrl', function($scope, $ionicPlatform) {

})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.controller('ProximiioCtrl', function($scope, myProximiio) {
  $scope.text_test = "Este texto es de prueba";
  $scope.Login = function() {
    myProximiio.Login({email: 'albert.san.iza@gmail.com', password: 'rsy52m7a'}).success(function(data) {
      $scope.text_test = data;
    }).error(function(e) {
      $scope.text_test = e;
    });
  };
  $scope.Registration = function() {
    myProximiio.Registration();
  };
  $scope.Analytics_Overview = function() {
    myProximiio.Analytics_Overview({date_from: '2016-01-01', date_to: '2016-04-01', place_id: ''}).success(function(data) {
      $scope.text_test = data;
    }).error(function(e) {
      $scope.text_test = e;
    });
  };
  $scope.Analytics_Visitor = function() {
    myProximiio.Analytics_Visitor({id: '538a33b7-195d-4431-8de0-4bf50154afac'}).success(function(data) {
      $scope.text_test = data;
    }).error(function(e) {
      $scope.text_test = e;
    });
  };
  $scope.Geofences_All = function() {
    myProximiio.Geofences_All({limit: '10', skip: '0'}).success(function(data) {
      $scope.text_test = data;
    }).error(function(e) {
      $scope.text_test = e;
    });
  };
  $scope.Geofences_Specific = function() {
    myProximiio.Geofences_Specific({id: '91c88926-86b0-45e6-bc6d-1e3c9ee491c2'}).success(function(data) {
      $scope.text_test = data;
    }).error(function(e) {
      $scope.text_test = e;
    });
  };
  $scope.Geofences_Create = function() {
    myProximiio.Geofences_Create({name: 'Test Geofence', address: 'Shaftesbury Avenue 4', area: {lat: '53.39165', lng: '-2.32738'}, radius: '8'}).success(function(data) {
      $scope.text_test = data;
    }).error(function(e) {
      $scope.text_test = e;
    });
  };

  $scope.Geofences_Update = function() {
    myProximiio.Geofences_Update({id: 'bfebdeb4-0311-4680-a5ad-c30406ae154d'}, {name: 'Super Test Geofence'}).success(function(data) {
      $scope.text_test = data;
    }).error(function(e) {
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
