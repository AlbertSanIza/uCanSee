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
.controller('LoginCtrl', function($scope, $state, $timeout, $ionicPlatform, $ionicLoading, uCanSee) {
  $scope.uCanSee = uCanSee.Fire;
  $scope.userData = new Object();
  $scope.signIn = function(param) {
    if(param.password == $scope.uCanSee.teams[param.index].password) {
      uCanSee.Index = param.index;
      $ionicLoading.show();
      $timeout(function () {
        $state.go('tab.dashboard');
        $ionicLoading.hide();
      }, 1300);
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
  $scope.uCanSee = uCanSee.Fire;
})
//------------------------------------------------------------------------------
.controller('ChallengeCtrl', function($scope, $ionicPlatform, uCanSee, myProximiio) {
  $scope.uCanSee = uCanSee.Fire;
  $scope.Challenges = [
    {
      "id": 0,
      "proximiio": "e6583632-8b70-4ce7-a20d-0fa8a70ac65e",
      "name": "Sack Relay Run",
      "description": "Team must complete, a Sack Relay Run, one lap per team member.",
      "locked": false,
      "img": "0.jpg"
    },
    {
      "id": 1,
      "proximiio": "e27f2c6f-5394-4b70-89c1-a28dbb35a8b0",
      "name": "Flour Basket",
      "description": "Team will sit in a straight line, in the form of a caterpillar. Teams must pass backwards a drilled basket full of flour above their heads and if the basket is dropped activity starts again.",
      "locked": false,
      "img": "1.jpg"
    },
    {
      "id": 2,
      "proximiio": "20013b4b-214b-4174-8c34-74fab31d09b7",
      "name": "Water Balloon Harvest",
      "description": "Organizers will throw water balloons, teams will need to catch them with a basket. At least 10 successful balloon catch are necessary to complete the stage.",
      "locked": false,
      "img": "2.jpg"
    },
    {
      "id": 3,
      "proximiio": "18a7de39-a32e-4ce5-8196-0809dcbb3654",
      "name": "Obstacle Run",
      "description": "Teams will be divided in pairs and each pair will tie themselves by the feet. All pairs must complete the obstacle run.",
      "locked": false,
      "img": "3.jpg"
    },
    {
      "id": 4,
      "proximiio": "7950954e-49fc-4319-b7ab-1ad94ffde5d7",
      "name": "Balloon Popping",
      "description": "Each team member must complete a lap and blow up a balloon with another team member by pressing their chest.",
      "locked": false,
      "img": "4.jpg"
    },
    {
      "id": 5,
      "proximiio": "b2f4841b-99f4-4643-aa1b-3b5ab4fea769",
      "name": "Orange Kiss",
      "description": "Team will form a line, team members must pass an orange using their necks. If the orange falls the team must begin at the start of the line.",
      "locked": false,
      "img": "5.jpg"
    },
    {
      "id": 6,
      "proximiio": "7a62dafb-43df-4c6f-98e2-2589a3ae1de6",
      "name": "Clothes Line",
      "description": "Team must use all of their usable clothes (if they want) to make a line of clothes in order to reach the other side of the field.",
      "locked": false,
      "img": "6.jpg"
    }
  ];
  myProximiio.Geofences_All({limit: '10', skip: '0'}).success(function(data) {
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < $scope.Challenges.length; j++) {
        if(data[i].id == $scope.Challenges[j].proximiio) {
          $scope.Challenges[j].position = [data[i].area.lat, data[i].area.lng];
          $scope.Challenges[j].radius = data[i].radius;
        }
      }
    };
  });
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
