//------------------------------------------------------------------------------
angular.module('starter.services', ['firebase'])
//------------------------------------------------------------------------------
.factory("myLocation", function($timeout, $ionicPlatform, $cordovaGeolocation, myFirebase) {
  var info = {};
  info.coordinates = [32.506511, -116.923950];
  function timeoutLocal(time) {
    $timeout(function() {
      Geolocation();
    }, time);
  };
  function Geolocation() {
    if(myFirebase.data.mock) {
      if(myFirebase.data.mock.activated == true) {
        info.coordinates = [myFirebase.data.mock.lat, myFirebase.data.mock.lon];
        timeoutLocal(1000);
      } else {
        $ionicPlatform.ready(function() {
          $cordovaGeolocation.getCurrentPosition({timeout: 5000, enableHighAccuracy: true}).then(function (position) {
            var lat = parseFloat(position.coords.latitude);
            var lon = parseFloat(position.coords.longitude);
            lat = lat.toFixed(6);
            lon = lon.toFixed(6);
            info.coordinates = [lat, lon];
            timeoutLocal(1000);
          }, function(err) {
            timeoutLocal(5000);
          });
        });
      }
    } else {
      timeoutLocal(1000);
    }
  };
  Geolocation();
  return info;
})
//------------------------------------------------------------------------------
.service("myFirebase", function($firebaseObject) {
  var ref = new Firebase("https://ucansee.firebaseio.com");
  this.data = $firebaseObject(ref);
  this.index = "";
})
//------------------------------------------------------------------------------
.service("myProximiio", function($http) {
  var urlBase = 'https://api.proximi.fi/'
  var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImMwYWJkNWJlMjNmODQwN2NjMGRkMjgxMzZkYzI3YWVlIiwidHlwZSI6InVzZXIiLCJ1c2VyIjoiU2FuY2hleiBBbGJlcnQiLCJ1c2VyX2lkIjoiNDRhMGYzZTctN2E4Zi00ODk2LWIxZjAtMTliN2ZkOTcwODBjIiwidGVuYW50X2lkIjoiZDYzNmUwZTAtNWQyMC00N2FlLTg0ZGQtZTA5MTRiODY2Y2UxIn0.gLxHRTpG9jQdwwdhrcty2hoNJA-cR1Ot-inIxFyPhl0';
  var headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token};
  this.Geofences_All = function(param) {
    return $http.get(urlBase + 'core/geofences?limit=' + param.limit + '&skip=' + param.skip, {headers});
  };
})
//------------------------------------------------------------------------------
.factory("myChallenge", function($http, myProximiio) {
  var info = new Object();
  info.tasks = [
    {
      "id": 0,
      "proximiio": "e6583632-8b70-4ce7-a20d-0fa8a70ac65e",
      "name": "_TASK_TITLE_0",
      "description": "_TASK_DESCRIPTION_0",
      "locked": false,
      "img": "0.jpg"
    },
    {
      "id": 1,
      "proximiio": "e27f2c6f-5394-4b70-89c1-a28dbb35a8b0",
      "name": "_TASK_TITLE_1",
      "description": "_TASK_DESCRIPTION_1",
      "locked": true,
      "img": "1.jpg"
    },
    {
      "id": 2,
      "proximiio": "20013b4b-214b-4174-8c34-74fab31d09b7",
      "name": "_TASK_TITLE_2",
      "description": "_TASK_DESCRIPTION_2",
      "locked": true,
      "img": "2.jpg"
    },
    {
      "id": 3,
      "proximiio": "18a7de39-a32e-4ce5-8196-0809dcbb3654",
      "name": "_TASK_TITLE_3",
      "description": "_TASK_DESCRIPTION_3",
      "locked": true,
      "img": "3.jpg"
    },
    {
      "id": 4,
      "proximiio": "7950954e-49fc-4319-b7ab-1ad94ffde5d7",
      "name": "_TASK_TITLE_4",
      "description": "_TASK_DESCRIPTION_4",
      "locked": true,
      "img": "4.jpg"
    },
    {
      "id": 5,
      "proximiio": "b2f4841b-99f4-4643-aa1b-3b5ab4fea769",
      "name": "_TASK_TITLE_5",
      "description": "_TASK_DESCRIPTION_5",
      "locked": true,
      "img": "5.jpg"
    },
    {
      "id": 6,
      "proximiio": "7a62dafb-43df-4c6f-98e2-2589a3ae1de6",
      "name": "_TASK_TITLE_6",
      "description": "_TASK_DESCRIPTION_6",
      "locked": true,
      "img": "6.jpg"
    }
  ];
  myProximiio.Geofences_All({limit: '10', skip: '0'}).success(function(data) {
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < info.tasks.length; j++) {
        if(data[i].id == info.tasks[j].proximiio) {
          info.tasks[j].position = [data[i].area.lat, data[i].area.lng];
          info.tasks[j].radius = data[i].radius;
          break;
        }
      }
    };
  });
  return info;
})
//------------------------------------------------------------------------------
