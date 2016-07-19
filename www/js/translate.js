//------------------------------------------------------------------------------
angular.module('starter.translate', ['pascalprecht.translate'])
//------------------------------------------------------------------------------
.config(function($translateProvider) {
  $translateProvider.translations('en', {
      '_REGISTER': 'REGISTER',
      '_SIGN_IN': 'SIGN IN',

    });
    $translateProvider.translations('es', {
      '_REGISTER': 'REGISTRO',
      '_SIGN_IN': 'INICIAR SESION',

    });
    $translateProvider.preferredLanguage('es');
})
//------------------------------------------------------------------------------
