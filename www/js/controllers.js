//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('IntroCtrl', function($scope, $state, $translate, uCanSee, myChallenge, myLocation, myFirebase) {
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
.controller('ChallengeCtrl', function($scope, uCanSee, myChallenge, myLocation) {
  $scope.uCanSee = uCanSee.Fire;
  $scope.Challenges = myChallenge.tasks;
})
//------------------------------------------------------------------------------
.controller('LocationCtrl', function($scope, myChallenge, myLocation) {
  $scope.myPosition = myLocation;
  $scope.Challenges = myChallenge.tasks;

})
//------------------------------------------------------------------------------
