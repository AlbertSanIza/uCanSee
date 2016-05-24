//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ngMap'])
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  });
  $stateProvider.state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  });
  $stateProvider.state('tab.proximiio', {
    url: '/proximiio',
    views: {
      'tab-proximiio': {
        templateUrl: 'templates/tab-proximiio.html',
        controller: 'ProximiioCtrl'
      }
    }
  });
  $stateProvider.state('tab.location', {
    url: '/location',
    views: {
      'tab-location': {
        templateUrl: 'templates/tab-location.html',
        controller: 'LocationCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/dash');
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
