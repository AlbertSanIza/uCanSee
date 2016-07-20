//------------------------------------------------------------------------------
angular.module('starter', ['ionic', 'starter.router', 'starter.controllers', 'starter.directives', 'starter.services', 'starter.translate', 'ngCordova', 'ngMap', 'firebase'])
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
.constant('$ionicLoadingConfig', {
  templateUrl: 'templates/ionic/loading.html'
})
//------------------------------------------------------------------------------
