//------------------------------------------------------------------------------
angular.module('starter.router', [])
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
  $stateProvider.state('tab.challenge', {
    url: '/challenge',
    views: {
      'tab-challenge': {
        templateUrl: 'templates/tab/tab-challenge.html',
        controller: 'ChallengeCtrl'
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
  $stateProvider.state('tab.proximiio', {
    url: '/proximiio',
    views: {
      'tab-proximiio': {
        templateUrl: 'templates/tab/tab-proximiio.html',
        controller: 'ProximiioCtrl'
      }
    }
  });
  $stateProvider.state('tab.cordova', {
    url: '/cordova',
    views: {
      'tab-cordova': {
        templateUrl: 'templates/tab/tab-cordova.html',
        controller: 'CordovaCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/intro');
})
//------------------------------------------------------------------------------
