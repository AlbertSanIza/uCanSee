//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('IntroCtrl', function($scope, $state, $translate, myFirebase, myLocation, myChallenge) {
  $scope.login = function() {
    $state.go('login');
  };
  $scope.register = function() {
    $state.go('register');
  };
  $scope.changeLanguage = function(key) {
    $translate.use(key);
  };
})
//------------------------------------------------------------------------------
.controller('LoginCtrl', function($scope, $state, $timeout, $ionicLoading, $ionicPopup, myFirebase) {
  $scope.Firebase = myFirebase.data;
  $scope.user = new Object();
  $scope.signIn2 = function(input) {
    $ionicLoading.show();
    $timeout(function () {
      if(input.password == $scope.Firebase.teams[input.index].password) {
        myFirebase.index = input.index;
        $state.go('tab.dashboard');
        $ionicLoading.hide();
      } else {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({title: "Error!", templateUrl: 'templates/ionic/popup.html'});
        alertPopup.then(function(res) {
          $scope.userData.password = "";
        });
      }
    }, 1600);
  };
})
//------------------------------------------------------------------------------
.controller('RegisterCtrl', function($scope) {
})
//------------------------------------------------------------------------------
.controller('DashboardCtrl', function($scope, myFirebase) {
  $scope.Firebase = myFirebase.data;
})
//------------------------------------------------------------------------------
.controller('ChallengeCtrl', function($scope, $state, $ionicSlideBoxDelegate, myFirebase, myLocation, myChallenge) {
  $scope.$on('$ionicView.enter', function(e) {
    $ionicSlideBoxDelegate.slide(myChallenge.currentSlide + 1, 300);
  });
  $scope.Firebase = myFirebase.data;
  $scope.myPosition = myLocation;
  $scope.Challenges = myChallenge.tasks;
  $scope.updateCurrentSlide = function() {
    myChallenge.currentSlide = myChallenge.currentSlide + 1;
    $ionicSlideBoxDelegate.slide(myChallenge.currentSlide + 1, 300);
    myChallenge.tasks[myChallenge.currentSlide - 1].active = false;
    myChallenge.tasks[myChallenge.currentSlide].active = true;
  };
  $scope.goToLocationTab = function() {
    $state.go('tab.location');
  };
})
//------------------------------------------------------------------------------
.controller('LocationCtrl', function($scope, myLocation, myChallenge) {
  $scope.myPosition = myLocation;
  $scope.Challenges = myChallenge.tasks;
})
//------------------------------------------------------------------------------
