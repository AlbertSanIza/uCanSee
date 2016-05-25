//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter.services', [])
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.service("uCanSeeFire", function($firebaseObject) {
  var ref = new Firebase("https://ucansee.firebaseio.com");
  this.fire = $firebaseObject(ref);
  this.id = "";
})
//------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------
