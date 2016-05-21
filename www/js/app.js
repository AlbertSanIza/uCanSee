angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
