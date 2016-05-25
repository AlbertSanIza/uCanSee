//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ngMap', 'firebase'])
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
  $stateProvider.state('intro', {
    url: '/intro',
    templateUrl: 'templates/auth/intro.html',
    controller: 'IntroCtrl'
  });
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/auth/login.html',
    controller: 'LoginCtrl'
  });
  $stateProvider.state('register', {
    url: '/register',
    templateUrl: 'templates/auth/register.html',
    controller: 'RegisterCtrl'
  });
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tab/tabs.html'
  });
  $stateProvider.state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/tab/tab-dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  });
  $stateProvider.state('tab.proximiio', {
    url: '/proximiio',
    views: {
      'tab-proximiio': {
        templateUrl: 'templates/tab/tab-proximiio.html',
        controller: 'ProximiioCtrl'
      }
    }
  });
  $stateProvider.state('tab.location', {
    url: '/location',
    views: {
      'tab-location': {
        templateUrl: 'templates/tab/tab-location.html',
        controller: 'LocationCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/intro');
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
