//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('IntroCtrl', function($scope, $state, $translate, uCanSee, myChallenge, myLocation) {
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
.controller('LoginCtrl', function($scope, $state, $timeout, $ionicLoading, $ionicPopup, uCanSee) {
  $scope.uCanSee = uCanSee.Fire;
  $scope.userData = new Object();
  $scope.signIn = function(param) {
    if(param.password == $scope.uCanSee.teams[param.index].password) {
      uCanSee.Index = param.index;
      $ionicLoading.show();
      $timeout(function () {
        $state.go('tab.dashboard');
        $ionicLoading.hide();
      }, 2000);
    } else {
      var alertPopup = $ionicPopup.alert({
        title: "Error!",
        templateUrl: 'templates/ionic/popup.html'
      });
      alertPopup.then(function(res) {
        $scope.userData.password = "";
      });
    }
  };
})
//------------------------------------------------------------------------------
.controller('RegisterCtrl', function($scope) {
})
//------------------------------------------------------------------------------
.controller('DashboardCtrl', function($scope, uCanSee) {
  $scope.uCanSee = uCanSee.Fire;
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
