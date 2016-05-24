//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter.services', [])
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
    return $http.post(urlBase + 'core_auth/login', param);
  };
  //----------------------------------------------------------------------------
  // Registration
  // This endpoint returns an authorization token, user object and organization object.
  this.Registration = function(param) {
  };
  //----------------------------------------------------------------------------
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
