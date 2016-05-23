//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
var PROXIMIIO_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImMwYWJkNWJlMjNmODQwN2NjMGRkMjgxMzZkYzI3YWVlIiwidHlwZSI6InVzZXIiLCJ1c2VyIjoiU2FuY2hleiBBbGJlcnQiLCJ1c2VyX2lkIjoiNDRhMGYzZTctN2E4Zi00ODk2LWIxZjAtMTliN2ZkOTcwODBjIiwidGVuYW50X2lkIjoiZDYzNmUwZTAtNWQyMC00N2FlLTg0ZGQtZTA5MTRiODY2Y2UxIn0.gLxHRTpG9jQdwwdhrcty2hoNJA-cR1Ot-inIxFyPhl0";
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter.services', [])
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.factory("Proximiio", function() {
  return {
    init: function(outputTriggerCallback, inputTriggerCallback, positionChangeCallback) {
      proximiio.setToken(PROXIMIIO_TOKEN);
      proximiio.setDebugOutput(true, null, null);
      proximiio.setOutputTriggerCallback(outputTriggerCallback);
      proximiio.setInputTriggerCallback(inputTriggerCallback);
      proximiio.setPositionChangeCallback(positionChangeCallback);
    }
  };
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.service("myProximiio", function() {
  this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImMwYWJkNWJlMjNmODQwN2NjMGRkMjgxMzZkYzI3YWVlIiwidHlwZSI6InVzZXIiLCJ1c2VyIjoiU2FuY2hleiBBbGJlcnQiLCJ1c2VyX2lkIjoiNDRhMGYzZTctN2E4Zi00ODk2LWIxZjAtMTliN2ZkOTcwODBjIiwidGVuYW50X2lkIjoiZDYzNmUwZTAtNWQyMC00N2FlLTg0ZGQtZTA5MTRiODY2Y2UxIn0.gLxHRTpG9jQdwwdhrcty2hoNJA-cR1Ot-inIxFyPhl0';
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
