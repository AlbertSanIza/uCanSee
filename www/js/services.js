//------------------------------------------------------------------------------
angular.module('starter.services', [])
//------------------------------------------------------------------------------
.factory("myLocation", function($timeout, $ionicPlatform, $cordovaGeolocation) {
  var info = {};
  info.coordinates = [32.506511, -116.923950];
  var posOptions = {
    timeout: 5000,
    enableHighAccuracy: true
  };
  function Geolocation() {
    $ionicPlatform.ready(function() {
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat = parseFloat(position.coords.latitude);
        var lon = parseFloat(position.coords.longitude);
        lat = lat.toFixed(6);
        lon = lon.toFixed(6);
        info.coordinates = [lat, lon];
        console.log("lat: " + lat + "lon: " + lon);
        $timeout(function() {
          Geolocation();
        }, 1000);
      }, function(err) {
        $timeout(function() {
          Geolocation();
        }, 5000);
      });
    });
  };
  Geolocation();
  return info;
})
//------------------------------------------------------------------------------
.service("uCanSee", function($firebaseObject) {
  var ref = new Firebase("https://ucansee.firebaseio.com");
  this.Fire = $firebaseObject(ref);
  this.Index = ""
})
//------------------------------------------------------------------------------
.service("myProximiio", function($http) {
  var urlBase = 'https://api.proximi.fi/'
  var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImMwYWJkNWJlMjNmODQwN2NjMGRkMjgxMzZkYzI3YWVlIiwidHlwZSI6InVzZXIiLCJ1c2VyIjoiU2FuY2hleiBBbGJlcnQiLCJ1c2VyX2lkIjoiNDRhMGYzZTctN2E4Zi00ODk2LWIxZjAtMTliN2ZkOTcwODBjIiwidGVuYW50X2lkIjoiZDYzNmUwZTAtNWQyMC00N2FlLTg0ZGQtZTA5MTRiODY2Y2UxIn0.gLxHRTpG9jQdwwdhrcty2hoNJA-cR1Ot-inIxFyPhl0';
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  };
  //----------------------------------------------------------------------------
  // Login
  // This endpoint returns an authorization token.
  this.Login= function(param) {
    // email
    // password
    return $http.post(urlBase + 'core_auth/login', param);
  };
  //----------------------------------------------------------------------------
  // Registration
  // This endpoint returns an authorization token, user object and organization object.
  this.Registration = function(param) {
    // email
    // password
    // first_name
    // last_name
    // background
    // country
    console.log("Registration: Nothing to do here...");
  };
  //----------------------------------------------------------------------------
  // Analytics
  // This endpoint returns analytic overview.
  this.Analytics_Overview = function(param) {
    // date_from
    // date_to
    //// place_id
    return $http.get(urlBase + 'core/analytics/overview?date_from=' + param.date_from + '&date_to=' + param.date_to, {headers});
  };
  // This endpoint returns specific visitor analytic overview.
  this.Analytics_Visitor = function(param) {
    // id
    return $http.get(urlBase + 'core/analytics/visitor/:id?id' + param.id, {headers});
  };
  //----------------------------------------------------------------------------
  // Geofences
  // This endpoint retrieves all geofences. GeoSearch can be enabled by adding all optional search_* query parameters.
  this.Geofences_All = function(param) {
    // limit
    // skip
    //// search_latitude
    //// search_longitude
    //// search_radius
    //// search_distance_order
    return $http.get(urlBase + 'core/geofences?limit=' + param.limit + '&skip=' + param.skip, {headers});
  };
  // This endpoint retrieves a specific geofence.
  this.Geofences_Specific = function(param) {
    // id
    return $http.get(urlBase + 'core/geofences/' + param.id, {headers});
  };
  // This endpoint creates a specific geofence.
  this.Geofences_Create = function(param) {
    // name
    // address
    // area.lat
    // area.lng
    // radius
    return $http.post(urlBase + 'core/geofences', param, {headers});
  };
  //----------------------------------------------------------------------------
  // This endpoint updates a specific geofence.
  this.Geofences_Update = function(param_put, param) {
    // id
    // name
    // address
    // area.lat
    // area.lng
    // radius
    return $http.put(urlBase + 'core/geofences/' + param_put.id, param, {headers});
  };
  //----------------------------------------------------------------------------
  // This endpoint deletes a specific geofence.
  this.Geofences_Delete = function(param) {
    // id
    return $http.delete(urlBase + 'core/geofences/', {headers});
  };
  //----------------------------------------------------------------------------
})
//------------------------------------------------------------------------------
.service("myChallenge", function($http, myProximiio) {
  var task = [
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
      "locked": true,
      "img": "2.jpg"
    },
    {
      "id": 3,
      "proximiio": "18a7de39-a32e-4ce5-8196-0809dcbb3654",
      "name": "Obstacle Run",
      "description": "Teams will be divided in pairs and each pair will tie themselves by the feet. All pairs must complete the obstacle run.",
      "locked": true,
      "img": "3.jpg"
    },
    {
      "id": 4,
      "proximiio": "7950954e-49fc-4319-b7ab-1ad94ffde5d7",
      "name": "Balloon Popping",
      "description": "Each team member must complete a lap and blow up a balloon with another team member by pressing their chest.",
      "locked": true,
      "img": "4.jpg"
    },
    {
      "id": 5,
      "proximiio": "b2f4841b-99f4-4643-aa1b-3b5ab4fea769",
      "name": "Orange Kiss",
      "description": "Team will form a line, team members must pass an orange using their necks. If the orange falls the team must begin at the start of the line.",
      "locked": true,
      "img": "5.jpg"
    },
    {
      "id": 6,
      "proximiio": "7a62dafb-43df-4c6f-98e2-2589a3ae1de6",
      "name": "Clothes Line",
      "description": "Team must use all of their usable clothes (if they want) to make a line of clothes in order to reach the other side of the field.",
      "locked": true,
      "img": "6.jpg"
    }
  ];
  this.tasks = task;
  myProximiio.Geofences_All({limit: '10', skip: '0'}).success(function(data) {
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < task.length; j++) {
        if(data[i].id == task[j].proximiio) {
          task[j].position = [data[i].area.lat, data[i].area.lng];
          task[j].radius = data[i].radius;
          break;
        }
      }
    };
  });
})
//------------------------------------------------------------------------------
