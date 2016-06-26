//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('IntroCtrl', function($scope, $state, uCanSee) {
  $scope.login = function() {
    $state.go('login');
  };
  $scope.register = function() {
    $state.go('register');
  };
})
//------------------------------------------------------------------------------
.controller('LoginCtrl', function($scope, $state, $ionicPlatform, $cordovaVibration, uCanSee) {
  $scope.uCanSee = uCanSee.Fire;
  $scope.userData = new Object();
  $scope.signIn = function(param) {
    if(param.password == $scope.uCanSee.teams[param.index].password) {
      uCanSee.Index = param.index;
      $ionicPlatform.ready(function() {
        //$cordovaVibration.vibrate(100);
        $state.go('tab.dashboard');
      });
    } else {
      $scope.userData.password = "";
    }
  };
})
//------------------------------------------------------------------------------
.controller('RegisterCtrl', function($scope, uCanSee) {
  $scope.uCanSee = uCanSee.Fire;
})
//------------------------------------------------------------------------------
.controller('DashboardCtrl', function($scope, $ionicPlatform, uCanSee) {
  $scope.uCanSee = uCanSee;
})
//------------------------------------------------------------------------------
.controller('ChallengeCtrl', function($scope, $ionicPlatform, uCanSee) {
  $scope.uCanSee = uCanSee;
  $scope.Challenges = [
    {id: 0, name: "Karma", locked: true},
    {id: 1, name: "Orange", locked: false}
  ];
})
//------------------------------------------------------------------------------
.controller('LocationCtrl', function($scope, $ionicLoading, $ionicPlatform, $cordovaGeolocation, myProximiio) {
  $scope.text = "Loading..."
  $scope.myPosition = [32.506511, -116.923950];
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
    $ionicLoading.show({
      template: '<ion-spinner icon="spiral" class="spinner-energized"></ion-spinner><br>{{text}}...',
      scope: $scope
    });
    $ionicPlatform.ready(function() {
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat = parseFloat(position.coords.latitude);
        var lon = parseFloat(position.coords.longitude);
        lat = lat.toFixed(6);
        lon = lon.toFixed(6);
        $scope.myPosition = [lat, lon];
        $ionicLoading.hide();
      }, function(err) {
        $scope.text = err.message;
      });
    });
  };
})
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
.controller('CordovaCtrl', function($scope, $ionicPlatform, $cordovaVibration, $cordovaBarcodeScanner, $cordovaGeolocation) {
  $scope.cordova_Vibration = function() {
    $ionicPlatform.ready(function() {
      $cordovaVibration.vibrate(100);
    });
  };
  $scope.BarcodeData = "It will appear here...";
  $scope.cordova_BarcodeScanner = function() {
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {
        $scope.BarcodeData = barcodeData;
      }, function(error) {
      });
    });
  };
  $scope.myPosition = [32.506511, -116.923950];
  $scope.cordova_Geolocation = function() {
    $ionicPlatform.ready(function() {
      $cordovaGeolocation.getCurrentPosition({timeout: 10000, enableHighAccuracy: false}).then(function (position) {
        var lat = parseFloat(position.coords.latitude);
        var lon = parseFloat(position.coords.longitude);
        $scope.myPosition = [lat.toFixed(6), lon.toFixed(6)];
      }, function(err) {
      });
    });
  };
})
//------------------------------------------------------------------------------
