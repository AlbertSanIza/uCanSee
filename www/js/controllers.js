//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('IntroCtrl', function($scope, $state, $translate, uCanSee, myChallenge) {
  $scope.login = function() {
    $state.go('login');
  };
  $scope.register = function() {
    $state.go('register');
  };
  $scope.changeLanguage = function(key) {
    $translate.use(key);
  };
})
//------------------------------------------------------------------------------
.controller('LoginCtrl', function($scope, $state, $timeout, $ionicLoading, $ionicPopup, uCanSee) {
  $scope.uCanSee = uCanSee.Fire;
  $scope.userData = new Object();
  $scope.signIn = function(param) {
    if(param.password == $scope.uCanSee.teams[param.index].password) {
      uCanSee.Index = param.index;
      $ionicLoading.show();
      $timeout(function () {
        $state.go('tab.dashboard');
        $ionicLoading.hide();
      }, 2000);
    } else {
      var alertPopup = $ionicPopup.alert({
        title: "Error!",
        templateUrl: 'templates/ionic/popup.html'
      });
      alertPopup.then(function(res) {
        $scope.userData.password = "";
      });
    }
  };
})
//------------------------------------------------------------------------------
.controller('RegisterCtrl', function($scope) {
})
//------------------------------------------------------------------------------
.controller('DashboardCtrl', function($scope, uCanSee, myLocation) {
  $scope.uCanSee = uCanSee.Fire;
})
//------------------------------------------------------------------------------
.controller('ChallengeCtrl', function($scope, $ionicPlatform, uCanSee, myChallenge, myLocation) {
  $scope.uCanSee = uCanSee.Fire;
  $scope.Challenges = myChallenge.tasks;
})
//------------------------------------------------------------------------------
.controller('LocationCtrl', function($scope, $timeout, $ionicLoading, $ionicPlatform, $cordovaGeolocation, myChallenge, myLocation) {
  $scope.myPosition = myLocation;
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
